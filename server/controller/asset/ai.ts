declare const BufferMemory

import express, { Request, Response, NextFunction } from 'express';

// Api
// import PythonShell from 'python-shell';
import {
  initializeAgentExecutor,
  loadAgent,
  AgentActionOutputParser,
  Agent,
  BaseSingleActionAgent,
  LLMSingleActionAgent,
  AgentExecutor,
  ZeroShotAgent,
  ChatAgent,
  ChatConversationalAgent,
  ChatConversationalAgentOutputParser,
  Tool,
  SqlToolkit,
  JsonToolkit,
  RequestsToolkit,
  OpenApiToolkit,
  VectorStoreToolkit,
  VectorStoreRouterToolkit,
  ZapierToolKit,
  createSqlAgent,
  createJsonAgent,
  createOpenApiAgent,
  createVectorStoreAgent,
} from "langchain/agents";

import {
  OpenAI,
  BaseLLM,
  LLM,
  PromptLayerOpenAI,
  OpenAIChat,
  Cohere,
  HuggingFaceInference,
  loadLLM,
  Replicate,
} from "langchain/llms";
// BaseLLMParams, SerializedLLM,

import {
  SerpAPI,
  Calculator,
  DadJokeAPI,
  BingSerpAPI,
  DynamicTool,
  IFTTTWebhook,
  ChainTool,
  QueryCheckerTool,
  InfoSqlTool,
  ListTablesSqlTool,
  JsonGetValueTool,
  JsonSpec,
  JsonListKeysTool,
  RequestsGetTool,
  RequestsPostTool,
  VectorStoreQATool,
  ZapierNLARunAction,
  ZapierNLAWrapper,
  Serper,
  AIPluginTool,
} from "langchain/tools";

import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  PromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";

import { LLMChain, ConversationChain } from "langchain/chains";

import { HumanChatMessage, AIChatMessage, SystemChatMessage } from "langchain/schema";

import { OpenAIEmbeddings,  CohereEmbeddings, Embeddings, FakeEmbeddings } from "langchain/embeddings"

import { ChatOpenAI } from "langchain/chat_models";

// Utils
import { promptTemplateHelper } from "../../utils/llm_helpers.js";
import ErrorResponse from "../../utils/errorResponse.ts";
import advancedResults from "../../middleware/advancedResults.ts";
import downloadImage from "../../middleware/downloadImage.js";
import stableDiffusion from "../../middleware/huggingface/stableDiffusion.js";

// JSON
import models from '../../static/models.json' assert { type: 'json' };

// Model
import Asset from "../../model/Asset.ts";
import User from "../../model/User.ts";
import AIArt from "../../model/asset/AIArt.ts";
import Chat from "../../model/asset/Chat.ts";

// Middleware
import asyncHandler from "../../middleware/async.ts";
import {
  checkConditionals,
  preventPublicKnowledge,
  preventSale,
} from "../../middleware/checkIfValidAsset.js";


// Types 
import { IChat } from '../../type/model.ts'
import { ILLM } from '../../type/utils.ts'

console.log("AI -------", process.env.OPENAI)
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

//@desc generate AI Art
//route POST /api/v1/assets/:assetId/ai/art
//@access PRIVATE
export const textToImage = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { model, prompt, size, numOfImg = 1, assetId } = req.body;

    if (!model || !prompt || !size || !numOfImg || !assetId) {
      return res
        .status(400)
        .json({ success: false, error: "Values are undefined" });
    }

    const user = await User.findById(req.body.user);
    if (!user) {
      return res
        .status(500)
        .json({ success: false, error: "User does not exist.." });
    }

    let asset = Asset.findById(assetId);
    if (!asset) {
      return res
        .status(500)
        .json({ success: false, error: `${assetId} does not exist!` });
    }

    // Check conditionals
    // await checkConditionals(next, req.body.asset)
    // Open AI
    let imageUrl, fileName;

    if (model == "openai/dalle-2") {
      const response = await openai.createImage({
        prompt,
        n: Number(numOfImg),
        size,
      });

      if (!response) {
        return res
          .status(500)
          .json({ success: false, error: `Open AI createImage method failed` });
      }

      imageUrl = { type: model, data: response.data.data[0].url };

      fileName = await downloadImage(next, user, imageUrl);
    } else if (model == "midjourney") {
      return res
        .status(500)
        .json({ success: false, error: `Midjourney is not yet available` });
    } else {
      fileName = await stableDiffusion(
        next,
        { username: user.username, userId: user.id, model },
        prompt
      );

      if (!fileName) {
        return res.status(500).json({
          success: false,
          error: `Stable Diffusion ${model} method failed`,
        });
      }
    }

    const promptObj = {
      model,
      url: fileName,
      prompt,
      numOfImg: Number(numOfImg),
      size,
      asset: assetId,
      user: req.body.user,
    };

    asset = await Asset.findByIdAndUpdate(assetId, { cover: fileName });

    const ai = await AIArt.create({ ...promptObj });

    return res.status(200).json({ success: true, data: { ai, asset } });
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }

    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
});

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const getChatMessages = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { assetId } = req.params;
    const chat = await Chat.find({ asset: assetId });
    if (!chat) {
      res.status(500).json({ status: false, error: "No chats found" });
    }
    res.status(200).json({ status: true, data: chat });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: { error, msg: "Catch error" } });
  }
});


//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const runOpenAIModel = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    // At this point the asset should be created already.
    // If chat is being accessed by createAsset controller then access assetId by createdAsset
    // If chat is accessed by by api then get assetId by params

    let assetId;
    if (req.params.assetId) {
      assetId = req.params.assetId;
    } else if (req.body.assetId) {
      assetId = req.body.assetId;
    } else {
      return res
        .status(500)
        .json({ status: false, error: "assetId does not exist" });
    }

    const asset = await Asset.findById(assetId);
    if (!asset) {
      return res.status(500).json({
        status: false,
        error: "Chat does not have an associated Asset",
      });
    }

    const {
      prompt,
      model,
      template,
      toggle = false,
      max_tokens,
      temperature,
      top_p,
      frequency_penalty,
      presence_penalty,
    } = req.body;

    const modelLLM = new ChatOpenAI({
      //  model,
       maxTokens: parseInt(max_tokens),
      temperature: parseFloat(temperature),
      topP: parseFloat(top_p),
      frequencyPenalty:  parseFloat(frequency_penalty),
      presencePenalty: parseFloat(presence_penalty),
      openAIApiKey: "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"
    });

    // const humanPrompt = 
    // console.log("Human Prompt", humanPrompt)
    let response;

    if(!toggle){
      const memory = new BufferMemory()
      const chain = new ConversationChain({ llm: modelLLM, memory });
       response = await chain.call({ input: prompt });
    } else {
      const promptTemplate = models.prompt_template.find(({ type }) => type === template)
      response = await promptTemplateHelper(res, promptTemplate?.structure, promptTemplate?.variables, modelLLM, prompt )
    }

    response = await new  AIChatMessage(response)

    console.log("Chat Open AI", response )

    const chat: IChat = await Chat.create({
      objectId: response?.data.object,
      model,
      prompt,
      assistant: response?.data?.choices[0].text,
      max_tokens,
      temperature,
      top_p,
      frequency_penalty,
      presence_penalty,
      stop: "\n",
      user: asset.user,
      asset: asset.id,
    });

    res.status(200).json({ status: true, data: chat });
    return next();
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: false, error });
  }
});

export const runHuggingFaceModel = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  try{

  // let assetId;
  // if (req.params.assetId) {
  //   assetId = req.params.assetId;
  // } else if (req.body.assetId) {
  //   assetId = req.body.assetId;
  // } else {
  //   return res
  //     .status(500)
  //     .json({ status: false, error: "assetId does not exist" });
  // }

  // const asset = await Asset.findById(assetId);
  // if (!asset) {
  //   return res.status(500).json({
  //     status: false,
  //     error: "Chat does not have an associated Asset",
  //   });
  // }

  const {
    prompt,
    model,
    max_tokens,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = req.body;

  // temperature control how random/creative the response is. It ranges from 0 ( deterministic) to 1 (max creativity)

    const modelLLM = new HuggingFaceInference({
      model,
      // maxTokens: parseInt(max_tokens),
      temperature: parseFloat(temperature),
      // topP: parseFloat(top_p),
      // frequencyPenalty:  parseFloat(frequency_penalty),
      // presencePenalty: parseFloat(presence_penalty),
      // apiKey: "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", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
    });
   const response = await modelLLM.call(prompt);

    // const chat = await Chat.create({
    //   objectId: response?.data.object,
    //   // interface,
    //   model,
    //   prompt,
    //   assistant: response?.data?.choices[0].text,
    //   max_tokens,
    //   temperature,
    //   top_p,
    //   frequency_penalty,
    //   presence_penalty,
    //   stop: "\n",
    //   user: asset.user,
    //   asset: asset.id,
    // });

    // res.status(200).json({ status: true, data: chat });
    return next();
  } catch(error){
    console.log(error)
    res.status(400).json({ status: false, error})
  }


});

export const runCohereModel = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const {
    prompt,
    model,
    max_tokens,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty 
  } = req.body;

  // Cohere API ay0CydvHD57oQKZPL7Q3MOiGEIXnOgGjNPY6OWvH
  const modelLLM = new Cohere({
     model,
     temperature: parseFloat(temperature),
    //  apiKey: 'ay0CydvHD57oQKZPL7Q3MOiGEIXnOgGjNPY6OWvH'
  })
})

export const runReplicateModel = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const {
    prompt,
    model,
    max_tokens,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty 
  } = req.body;

  // Cohere API ay0CydvHD57oQKZPL7Q3MOiGEIXnOgGjNPY6OWvH
  const modelLLM = new Replicate({
     model,
     apiKey: "2104d3d038367229f6d336ec4f8cd44e3d0a7560"
  })
})

export const runAgentGPT = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const {
    prompt,
    model,
    max_tokens,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = req.body;


  const modelLLM = new OpenAI({
    maxTokens: parseInt(max_tokens),
   temperature: parseFloat(temperature),
   topP: parseFloat(top_p),
   frequencyPenalty:  parseFloat(frequency_penalty),
   presencePenalty: parseFloat(presence_penalty),
   openAIApiKey: "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"
 });

  const tools = [new SerpAPI(), new Calculator()];
  const executor = await initializeAgentExecutor(
    tools,
    modelLLM,
    "zero-shot-react-description"
  );
  console.log("Loaded agent.");
  const input = `What are the total number of countries in Africa raised to the power of 3`;
  const result = await executor.call({ input })
  console.log(`Got output ${result.output}`)
});

export const createEmbeddings = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Embed query from the user
  const embeddings = new OpenAIEmbeddings()
  const response = await embeddings.embedQuery("Hello World");
  console.log("Query vector", response )

  // Embed documents ( Convert text/data to numbers)
  const documentResponse = await embeddings.embedDocuments([
    "Hello world",
    "Bye Bye"
  ])

  console.log({ document: documentResponse})
})

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const hands = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  var options = {
    args: [
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims, // number of simulations
    ],
  };

  // PythonShell.run('../../..//api/hand/hand.py', options, function (err, data) {
  //   if (err) res.send(err);
  //   res.send(data.toString())
  // });

  res.status(200).json({ content: "Hands" });
});
