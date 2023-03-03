// Utils
const ErrorResponse = require('../utils/errorResponse');
const advancedResults = require('../middleware/advancedResults');
const downloadImage = require("../middleware/downloadImage")

// Api
const { Configuration, OpenAIApi } = require("openai")
const PythonShell = require('python-shell');

// Model
const Asset = require('../model/Asset');
const AIArt = require('../model/assetTypes/AIArt');
const User = require('../model/User');

// Middleware
const asyncHandler = require('../middleware/async');
const { checkConditionals, preventPublicKnowledge, preventSale } = require('../middleware/checkIfValidAsset');

const configuration = new Configuration({
  apiKey: process.env.OPENAI
})

const openai = new OpenAIApi(configuration)


//@desc generate AI Art
//route POST /api/v1/assets/:assetId/ai/art
//@access PRIVATE
exports.generateArt = asyncHandler(async (req, res, next) => {
  try{

  req.body.user = req.user.id;
  const { model, prompt, size, numOfImg } = req.body
  const { assetId } = req.params

  if( !model || !prompt || !size || !numOfImg ){
    return res.status(400).json({ success: false, error: "Values are undefined" })
  }

  const user = await User.findById(req.body.user);
  if(!user){
      return next(new ErrorResponse(`User does not exist..`, 404))  
  }
  
  // Check conditionals
  // await checkConditionals(next, req.body.asset)
  
const asset = await Asset.findById(assetId);
  if(!asset){
      return next(new ErrorResponse(`No asset found - ${assetId}.`, 404))  
  }

const response = await openai.createImage({
    prompt,
    n: Number(numOfImg),
    size
  });

const imageUrl = response.data.data[0].url


const fileName = await downloadImage(next, user, imageUrl)


const promptObj = {
   model,
   url: fileName,
   prompt,
   numOfImg: Number(numOfImg),
   size,
   asset: assetId,
   user: req.body.user 
}

await Asset.findByIdAndUpdate( assetId, { cover: fileName })

const ai = await AIArt.create({ ...promptObj });
res.status(200).json({ success: true, data: ai })

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
exports.getAssetArt = asyncHandler(async (req, res, next) => {

const { assetId } = req.params;

const asset = await AIArt.find({ asset: assetId })

  res.status(200).json({ status: true, data: asset})
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