import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    PromptTemplate,
    SystemMessagePromptTemplate,
  } from "langchain/prompts";

  import { BufferMemory } from "langchain/memory";
  
  import { LLMChain, ConversationChain } from "langchain/chains";

export const promptTemplateHelper = async (res, template, variables, model,  prompt) => {
    // variable must be an array
    if(!template || !variables.length || !model || !prompt ) return res.status(400).json({ status: false, message: "Expected arguments are missing"})
  const memory = new BufferMemory()
  const promptTemplate = new PromptTemplate({ template, inputVariables: variables });
  const chain = new ConversationChain({ llm: model, prompt: promptTemplate, memory });
  const response = await chain.call({ [variables]: prompt });
  return response;
  }