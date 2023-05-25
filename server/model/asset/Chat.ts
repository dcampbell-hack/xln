import mongoose from 'mongoose';
const { Schema, Types } = mongoose;

import { IChat } from '../../type/model.ts'

const ChatSchema = new Schema<IChat>({ 
model: {
    type: String,
    enum: [
    "text-davinci-003",
    "gpt2", // 2/5
    "gpt2-medium", // 2/5
    "distilgpt2", // 1/5
    "gpt2-large", // 2/5
    "bigscience/bloom-560m", // 3/5
    "openai-gpt", // 1/5 focused on scriptwriting
    "decapoda-research/llama-7b-hf", // too large
    "EleutherAI/gpt-neo-2.7B", // 2/5
    "bigscience/test-bloomd-6b3", // 0/5 no response
    "bigscience/bloom-7b1", //
    "bigcode/santacoder",
    "Salesforce/codegen-350M-multi",
    "gpt2-xl",
    "cerebras/Cerebras-GPT-111M",
    "EleutherAI/gpt-neo-1.3B",
    "facebook/opt-1.3b",
    "xlnet-base-cased",
    "Salesforce/codegen-2B-multi",
    "facebook/opt-125m",
    "TehVenom/PPO_Pygway-V8p4_Dev-6b",
    "facebook/opt-350m",
    "decapoda-research/llama-13b-hf",
    "EleutherAI/gpt-j-6b",
    "facebook/opt-66b",
    "facebook/opt-13b",
    "facebook/opt-6.7b",
    "bigscience/bloomz-560m",
    "EleutherAI/gpt-neo-125m",
    "KoboldAI/OPT-6.7B-Erebus",
    "codeparrot/codeparrot",
    "databricks/dolly-v2-12b",
    "togethercomputer/GPT-NeoXT-Chat-Base-20B",
    "cerebras/Cerebras-GPT-13B",
    "anon8231489123/vicuna-13b-GPTQ-4bit-128g",
    "anon8231489123/gpt4-x-alpaca-13b-native-4bit-128g",
    "Gustavosta/MagicPrompt-Stable-Diffusion",
    "lmsys/vicuna-13b-delta-v0",
    "chavinlo/gpt4-x-alpaca",
    "EleutherAI/gpt-neox-20b",
    "databricks/dolly-v1-6b",
    "togethercomputer/GPT-JT-6B-v1",
    "OpenAssistant/oasst-sft-1-pythia-12b",
    "stabilityai/stablelm-tuned-alpha-7b",
    "avinlo/alpaca-native",
    "decapoda-research/llama-65b-hf",
    "BlinkDL/rwkv-4-raven",
    "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    "stanford-crfm/BioMedLM",
    "stabilityai/stablelm-base-alpha-7b",
    "facebook/opt-66b",
    "succinctly/text2image-prompt-generator",
    "Intel/fid_flan_t5_base_nq",
    ],
    required: [ true, "Include the chat model being used"]
},
objectId: {
    type: String
},
interfaces: {
    type: String
},
prompt: {
    type: String,
    required: [ false, 'Text prompt is required']
},
assistant: {
    type: String,

},
max_tokens: {
    type: Number,
    required: [ false, "The size of this image is required"]
},
temperature: {
    type: Number,
    required: [ false, "Include the amount of images to be generated" ]
},
top_p: {
   type: Number,
   required: [ false, ""]
},
frequency_penalty: {
    type: Number,
    required: false
},
presence_penalty: {
    type: Number,
    required: false
},
stop: {
    type: String,
    required: false
},
asset:  {
    type: 'ObjectId',
    ref: 'Asset',
    required: true
},
user: {
    type:'ObjectId',
    ref: 'User',
    required: true
}

}, {
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true }
});


//Reverse populate with virtuals
ChatSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
ChatSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('Chat', ChatSchema);