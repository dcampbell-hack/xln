// Utils
const ErrorResponse = require('../../utils/errorResponse');
const advancedResults = require('../../middleware/advancedResults');
const downloadImage = require("../../middleware/downloadImage")
const stableDiffusion = require("../../middleware/huggingface/stableDiffusion");

// Api
const { Configuration, OpenAIApi } = require("openai")
const PythonShell = require('python-shell');
// const { LLMChain }  = require("langchain/chains");

// Model
const Asset = require('../../model/Asset');
const User = require('../../model/User');
const AIArt = require('../../model/asset/AIArt');
const AIChat = require('../../model/asset/Chat');

// Middleware
const asyncHandler = require('../../middleware/async');
const { checkConditionals, preventPublicKnowledge, preventSale } = require('../../middleware/checkIfValidAsset');

const configuration = new Configuration({
  apiKey: process.env.OPENAI
})

const openai = new OpenAIApi(configuration)


//@desc generate AI Art
//route POST /api/v1/assets/:assetId/ai/art
//@access PRIVATE
exports.textToImage = asyncHandler(async (req, res, next) => {
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
exports.textToAiChat = asyncHandler(async (req, res, next) => {
try{

  /* 
  text-davinci-003
  text-curie-001
  text-babbage-001
  text-ada-001
  */


  // OpenAI
   const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: ``,
    max_tokens: 64,
    temperature: 0,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"]
   })

  res.status(200).json({ status: true, data: response.data.choices[0].text })

} catch(error){
   console.log("Error", error )
}

})



//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
exports.hands = asyncHandler(async (req, res, next) => {

  var options = {
    args:
    [
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims // number of simulations
    ]
  }

PythonShell.run('../../..//api/hand/hand.py', options, function (err, data) {
  if (err) res.send(err);
  res.send(data.toString())
});

res.status(200).json({  content: "Hands"})

});