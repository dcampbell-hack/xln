import { OpenAI, PromptTemplate } from "langchain";
import { StructuredOutputParser } from 'langchain/output_parsers'
import fs from 'fs'

// Load environment variables ( populate process.env from .env file )
import * as dotenv from 'dotenv'
dotenv.config()

import { ChatOpenAI } from 'langchain/chat_models'
import { HumanChatMessage, SystemChatMessage } from "langchain/dist/schema";

const chat = new ChatOpenAI({ temperature: 0 })

export const run = async () => {
    const response = await chat.call([
        new HumanChatMessage(
            "give me a component that renders a h1 tag"
        )
    ]);

    try{
        await fs.promises.writeFile('response.txt', JSON.stringify(response, null, 2))
        console.log("File saved successfully")
    } catch(err){
        console.error("Error writing file:", err)
    }

    const removedEscapedCharacters = (str) => {
        return str.replace(/\\n/g, '\n')
    }

    const processFile = async () => {
        try{
            // Read the JSON file
            const fileContent = await fs.promises.readFile("response.txt", "utf8")

            //Parse the JSON content
            const jsonData = JSON.parse(fileContent)

            // Extract the 'text' property and remove escaped characters 
            const text = removedEscapedCharacters(jsonData.text)

            // Save the result to a new file
            await fs.promises.writeFile('output.txt', text)
            console.log("File processed successfully")
        } catch(err){
            console.error("Error processing file", err)
        }
    }

    processFile()
}