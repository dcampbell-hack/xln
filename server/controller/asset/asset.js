// API
import axios from 'axios';
import path from 'path';
import fs from "fs"
import ytdl from 'ytdl-core';

// Controller
import { textToImage, postChatMessage } from './ai.js';

// Models
import Conditional from '../../model/Conditional.js';
import Asset from '../../model/Asset.js';
import Category from '../../model/Category.js';
import Shares from '../../model/asset/Share.js';
import Chat from '../../model/asset/Chat.js';

// Utils
import ErrorResponse from '../../utils/errorResponse.js';
import geocoder from '../../utils/geocoder.js';


// Middleware
import { checkConditionals, preventPublicKnowledge } from '../../middleware/checkIfValidAsset.js'

import assetUpload from '../../middleware/assetUpload.js';
import { checkModelForDuplicate } from '../../middleware/checkModelForDuplicate.js';
import asyncHandler from '../../middleware/async.js';

const authToken = fs.readFileSync('./server/config/authToken.txt', {
  encoding: 'utf8', flag: 'r'
});


//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const getAssets = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
});

//@desc get user assets
//route GET /api/v1/assets
//@access PRIVATE
export const getUserAssets = asyncHandler(async (req, res, next) => {

    const userAssets = await Asset.find({ user: req.body.id })
    if(!userAssets){
        return res.status(500).json({ success: false, error: "The user has not created any assets"})
    }

    res.status(200).json({ success: true, data: userAssets })
});

//@desc get single asset
//route GET /api/v1/assets/:id
//@access PRIVATE
export const getAsset = asyncHandler(async (req, res, next) => {
const user = req.user;


const asset = await Asset.findById(req.params.id);
if(!asset){
    return next(new ErrorResponse(`Asset not found ID of ${req.params.id}`, 404))
}

// Check conditionals
await checkConditionals(next, req.params.id)
await preventPublicKnowledge(next, req.params.id )


let category = await Category.find();

if(!category){
   category = [];
}


// const share = await Shares.findOne({ user: user._id })

// // if(user._id !== share.user ){
// //     next(new ErrorResponse(`You must own a share of this asset to access it.`, 500) )
// // }

res.status(200).json({ success: true,  data: asset })
   
});


//@desc create single asset
//route POST /api/v1/assets
//@access PRIVATE
export const createAsset = asyncHandler(async (req, res, next) => {

   //Add User to body 
   req.body.user = req.user.id;
   const foundDuplicateAsset = await Asset.find({ name: req.body.name})

   //const { assetType, name, category, description, cover, website, price, fee, stock, user, model, prompt, size   } = req.body;

   //If user is not admin they can only add one Asset
   if(req.user.role === 'system'){
       return res.status(400).json({ success: false, error: "BAD REQUEST: System users are not allowed to publish assets (400)", status: 400  })
    }

   if(foundDuplicateAsset.length){
    return res.status(400).json({ success: false, error: "BAD REQUEST: Duplicate Entry (400)", status: 400  })
   }

// Check Conditionals
// assetUpload(Asset, 'image', 'asset', req, res, next);

try{
console.log({ asset: req.body })
const asset = await Asset.create({ ...req.body });
req.body.assetId = asset.id

// AI Art
if( asset.assetType[0] == "AI Art"){
     await textToImage( req, res, next )
} 

if( asset.assetType[0] == "AI Chat"){
 await postChatMessage(req, res, next)
 return next()
}
// Audio
// Blog
// Document
// Domain
// Downloader
// Enterprise
// File
// Link 
// Live 
// Text
// Image 
// Metaverse 
// Music 
// Podcast 
// Real Estate
// Shop
// Video 
// Website

// return res.status(200).json({ status: true, data: asset })


} catch(error){
    res.status(500).json({ status: false, error })
}

});


//@desc update single asset
//route PUT /api/v1/assets/:id
//@access PRIVATE
export const updateAsset = asyncHandler(async (req, res, next) => {

// Check conditionals
await checkConditionals(next, req.params.id)

let asset = await Asset.findById(req.params.id);
if(!asset){
        return next(new ErrorResponse(`Asset not updated with ID of ${req.params.id}`, 404))
    }
    asset = await Asset.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({ success: true, data: asset })
});

//@desc delete single asset
//route DELETE /api/v1/assets/:id
//@access PRIVATE
export const deleteAsset = asyncHandler(async (req, res, next) => {

 // Check Conditionals
await checkConditionals(next, req.params.id)   

const asset = await Asset.findById(req.params.id);
    
    if(!asset){
        return next(new ErrorResponse(`Assets not found with of ${req.params.id}`, 404))
    }

// Make sure user is share owner 
if(asset.user.toString() !== req.user.id && req.user.role !== 'admin'){
    return next(new ErrorResponse(`User ${req.user.id} is not authorized to delete this comment.`, 404))
}

    asset.remove();
    res.status(200).json({ success: true, data: {}, msg: 'Asset deleted'})
});

//@desc Upload photo to asset 
//@route PUT /api/v1/asset/:id/cover
//@access PRIVATE 
export const assetCoverUpload = asyncHandler(async(req, res, next) => {

// Check Conditionals
await checkConditionals(next, req.params.id)


console.log('Upload Asset ----', req.params.id)
await assetUpload(Asset, 'image', 'asset', req, res, next);

await Asset.findByIdAndUpdate( req.params.id, { pending: false } )

})

//@desc Get assets within radius 
//@route GET /api/v1/asset/radius/:zipcode/:distance 
//@access PUBLIC 
export const getAssetsInRadius = asyncHandler(async(req, res, next) => {
    const { zipcode, distance } = req.params;
    const loc = await geocoder.geocode(zipcode)
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    //Calc Radius using radians 
    //Divide distance by radius of Earth 
    //Earth radius = 3963 / 6378 km 
    const radius = distance / 3963;

    const assets = await Asset.find({
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] }}
    });

    res.status(200).json({ success: true, count: asset.length, data: assets })
})


//@desc Upload photo to asset 
//@route PUT /api/v1/asset/:id/cover
//@access PRIVATE 
export const downloadYoutube = asyncHandler(async(req, res, next) => {
const url = req.body.url_download;
const id = req.body.id
const isYoutubeLink = url.includes("youtube.com/watch?v=")

if(!isYoutubeLink){
   return res.status(406).json({ success: false, message: "Paste Youtube Link"})
}

const video = `youtube_${url.split("=")[1]}.mp4`

console.log("Youtube ---", )
 ytdl(url).pipe(fs.createWriteStream(`client/uploads/${id}/video/${video}`));
res.status(200).json({ success: true, data: video})

})


export const youtube = asyncHandler(async(req, res, next) => {
       try{
          const url = req.query.url_download;
          const videoId = await ytdl.getURLVideoID(url)
          const metInfo = await ytdl.getInfo(url)

          let data = {
            url: "https://www.youtube.com/embed/"+videoId,
            info: metInfo.formats
          }

          return res.send(data)

       } catch(err){
          return res.status(500)
       }
    })