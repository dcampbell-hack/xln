// Api
// import { Configuration, OpenAIApi } from "openai"
// import PythonShell from 'python-shell';
import { initializeAgentExecutor, loadAgent, AgentActionOutputParser, Agent, BaseSingleActionAgent, LLMSingleActionAgent, AgentExecutor, ZeroShotAgent, ChatAgent, ChatConversationalAgent, ChatConversationalAgentOutputParser, Tool, SqlToolkit, JsonToolkit, RequestsToolkit, OpenApiToolkit, VectorStoreToolkit, VectorStoreRouterToolkit, ZapierToolKit, createSqlAgent, createJsonAgent, createOpenApiAgent, createVectorStoreAgent  } from "langchain/agents"
import { OpenAI, BaseLLM,  LLM,  PromptLayerOpenAI, OpenAIChat, Cohere, HuggingFaceInference, loadLLM, Replicate } from "langchain/llms";
// BaseLLMParams, SerializedLLM, 
import { SerpAPI, Calculator, DadJokeAPI, BingSerpAPI,  DynamicTool, IFTTTWebhook, ChainTool, QueryCheckerTool, InfoSqlTool,  ListTablesSqlTool,  JsonGetValueTool, JsonSpec, JsonListKeysTool, RequestsGetTool, RequestsPostTool, VectorStoreQATool, ZapierNLARunAction, ZapierNLAWrapper, Serper, AIPluginTool  } from "langchain/tools"


// Utils
import ErrorResponse from '../../utils/errorResponse.js';
import advancedResults from '../../middleware/advancedResults.js';
import downloadImage from "../../middleware/downloadImage.js"
import stableDiffusion from "../../middleware/huggingface/stableDiffusion.js";

// Model
import Asset from '../../model/Asset.js';
import User from '../../model/User.js';
import AIArt from '../../model/asset/AIArt.js';
import Chat from '../../model/asset/Chat.js';

// Middleware
import asyncHandler from '../../middleware/async.js';
import { checkConditionals, preventPublicKnowledge, preventSale } from '../../middleware/checkIfValidAsset.js';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI
// })

// const openai = new OpenAIApi(configuration)

const model = new OpenAI({ openAIApiKey: process.env.OPENAI, temperature: 0.1 })


//@desc generate AI Art
//route POST /api/v1/assets/:assetId/ai/art
//@access PRIVATE
export const textToImage = asyncHandler(async (req, res, next) => {
  try{

  const { model, prompt, size, numOfImg = 1, assetId } = req.body

  if( !model || !prompt || !size || !numOfImg || !assetId ){
    return res.status(400).json({ success: false, error: "Values are undefined" })
  }

  const user = await User.findById(req.body.user);
  if(!user){
    return res.status(500).json({ success: false, error: "User does not exist.." })
  }

  let asset = Asset.findById(assetId);
  if(!asset){
    return res.status(500).json({ success: false, error: `${assetId} does not exist!`})
  }
  
  // Check conditionals
  // await checkConditionals(next, req.body.asset)
// Open AI
let imageUrl, fileName;

if(model == "openai/dalle-2"){
const response = await openai.createImage({
    prompt,
    n: Number(numOfImg),
    size
  });

  if(!response){
    return res.status(500).json({ success: false, error: `Open AI createImage method failed` })
  }

imageUrl = { type: model, data: response.data.data[0].url }

fileName = await downloadImage(next, user, imageUrl)

} else if(model == "midjourney"){
  return res.status(500).json({ success: false, error: `Midjourney is not yet available`})
} else {
fileName = await stableDiffusion(next, { username: user.username, userId: user.id, model}, prompt)

 if(!fileName){
  return res.status(500).json({ success: false, error: `Stable Diffusion ${model} method failed` })
}

}

const promptObj = {
   model,
   url: fileName,
   prompt,
   numOfImg: Number(numOfImg),
   size,
   asset: assetId,
   user: req.body.user 
}

asset = await Asset.findByIdAndUpdate( assetId, { cover: fileName })

const ai = await AIArt.create({ ...promptObj });

return res.status(200).json({ success: true, data: { ai, asset } })

  } catch(err){  

    if(err.response){
      console.log(err.response.status)
      console.log(err.response.data)
    } else {
      console.log(err.message)
    }

     res.status(400).json({
      success: false,
      error: "The image could not be generated"    
     })
   } 

});

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const postChatMessage = asyncHandler(async (req, res, next) => {
try{
  // At this point the asset should be created already. 
  // If chat is being accessed by createAsset controller then access assetId by createdAsset 
  // If chat is accessed by by api then get assetId by params

  let assetId;
  if( req.params.assetId ){
     assetId = req.params.assetId
  } else if( req.body.assetId ){
    assetId = req.body.assetId
  } else {
    return res.status(500).json({ status: false, error: "assetId does not exist" })
  }

  const { prompt, model, max_tokens = parseInt(max_tokens), temperature = parseFloat(temperature), top_p = parseFloat(top_p), frequency_penalty = parseFloat(frequency_penalty) , presence_penalty = parseFloat(presence_penalty) } = req.body;
  
  const asset = await Asset.findById(assetId)
  if(!asset){
    return res.status(500).json({ status: false, error: "Chat does not have an associated Asset"})
  }
  
  // OpenAI
   const response = await openai.createCompletion({
    model,
    prompt,
    max_tokens: parseInt(max_tokens),
    temperature: parseFloat(temperature),
    top_p: parseFloat(top_p),
    frequency_penalty: parseFloat(frequency_penalty) ,
    presence_penalty: parseFloat(presence_penalty),
    // stop: ["\n"]
   })

   const chat = await Chat.create({
    objectId: response?.data.object,
    // interface,
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
    asset: asset.id
   })

  res.status(200).json({ status: true, data: chat })
  return next()

} catch(error){
  res.status(500).json({ status: false, error })
}

})

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const getChatMessages = asyncHandler(async (req, res, next) => {
  try{
      const { assetId } = req.params;
    const chat = await Chat.find({ asset: assetId })   
    if(!chat){
      res.status(500).json({ status: false, error: "No chats found" })
    }
    res.status(200).json({ status: true, data: chat })
  
  } catch(error){
    res.status(500).json({ status: false, error: { error, msg: "Catch error"} })
  }
  
  })

export const selectLangModel = asyncHandler(async (req, res, next) => {
  console.log("SELECT LANG MODEL ----", req.body)
// temperature control how random/creative the response is. It ranges from 0 ( deterministic) to 1 (max creativity)

const response = await model.call("What is the capital city of France?")
console.log({response})
})

export const runAgentGPT = asyncHandler(async (req, res, next) => {
  const tools = [ new SerpAPI(), new Calculator()]
  const executor = await initializeAgentExecutor(
    tools,
    model,
    "zero-shot-react-description"
  );
  console.log("Loaded agent.")
  const input = `What are the total number of countries in Africa raised to the power of `
})

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const hands = asyncHandler(async (req, res, next) => {

  var options = {
    args:
    [
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims // number of simulations
    ]
  }

// PythonShell.run('../../..//api/hand/hand.py', options, function (err, data) {
//   if (err) res.send(err);
//   res.send(data.toString())
// });

res.status(200).json({  content: "Hands"})

});