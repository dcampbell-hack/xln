export interface Field {
    name: string
}

export interface ILLM {
    model?: string,
    maxTokens: number,
   temperature: number,
   topP: number,
   frequencyPenalty:  number,
   presencePenalty: number,
   openAIApiKey?: string
  }


export interface IPromptTemplate {
  type: string,
  variables: string[],
  structure: string
}


export interface IModelJSON {
  prompt_template: IPromptTemplate[],
  xln: string[],
  openai: string[],
  huggingface: string[]
}
