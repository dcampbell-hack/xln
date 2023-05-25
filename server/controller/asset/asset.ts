import express, { Request, Response, NextFunction } from 'express';
import { AdvanceResults, IUserAuthRequest, RequestWithArgs } from '../../type/definition.ts';

// API
import axios from "axios";
import path from "path";
import fs from "fs";
import ytdl from "ytdl-core";

// JSON
import  models from "../../static/models.json" assert { type: "json" };

// Controller
import { textToImage, runHuggingFaceModel, runOpenAIModel } from "./ai.ts";
import { createAudio } from "./audio.js"

// Models
import Conditional from "../../model/Conditional.ts";
import Asset from "../../model/Asset.ts";
import Category from "../../model/Category.ts";
import Shares from "../../model/asset/Share.ts";
import Chat from "../../model/asset/Chat.ts";

// Utils
import ErrorResponse from "../../utils/errorResponse.ts";

// Middleware
import {
  checkConditionals,
  preventPublicKnowledge,
} from "../../middleware/checkIfValidAsset.js";

import assetUpload from "../../middleware/assetUpload.js";
import { checkModelForDuplicate } from "../../middleware/checkModelForDuplicate.ts";
import asyncHandler from "../../middleware/async.ts";

//@desc get all assets
//route GET /api/v1/assets
//@access PRIVATE
export const getAssets = asyncHandler(async (req: Request, res: AdvanceResults, next: NextFunction) => {
  res.status(200).json(res.advancedResults);
});

//@desc get user assets
//route GET /api/v1/assets
//@access PRIVATE
export const getUserAssets = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const userAssets = await Asset.find({ user: req.body.id });
  if (!userAssets) {
    return res
      .status(500)
      .json({ success: false, error: "The user has not created any assets" });
  }

  res.status(200).json({ success: true, data: userAssets });
});

//@desc get single asset
//route GET /api/v1/assets/:id
//@access PRIVATE
export const getAsset = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
  const user = req.user;

  const asset = await Asset.findById(req.params.id);
  if (!asset) {
    return next(
      new ErrorResponse(`Asset not found ID of ${req.params.id}`, 404)
    );
  }

  // Check conditionals
  // await checkConditionals(next, req.params.id);
  // await preventPublicKnowledge(next, req.params.id);

  let category = await Category.find();

  if (!category) {
    category = [];
  }

  // const share = await Shares.findOne({ user: user._id })

  // // if(user._id !== share.user ){
  // //     next(new ErrorResponse(`You must own a share of this asset to access it.`, 500) )
  // // }

  res.status(200).json({ success: true, data: asset });
});

//@desc create single asset
//route POST /api/v1/assets
//@access PRIVATE
export const createAsset = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
  //Add User to body
  req.body.user = req.user.id;

  const { assetType } = req.body;

  //If user is not admin they can only add one Asset
  if (req.user.role === "system") {
    return res.status(400).json({
        success: false,
        error:
          "BAD REQUEST: System users are not allowed to publish assets (400)",
        status: 400,
      });
  }

  console.log("Asset Body Data -----", { 
    body: req.body, 
    cover: req.files 
  })

  try {
    // const asset = await Asset.create({ ...req.body });
    // req.body.assetId = asset.id;

    // Check Conditionals
//assetUpload(Asset, 'image', 'asset', req, res, next);

    if (assetType == "AI Art") {
      await textToImage(req, res, next);
    }

    if (assetType == "AI Chat") {
      console.log("Asset Chat ----", req.body);

      if (models.openai.includes(req.body.model)) {
        await runOpenAIModel(req, res, next);
      } else if (models.huggingface.includes(req.body.model)) {
        await runHuggingFaceModel(req, res, next);
      } else {
        res.status(500).json({ status: false, error: "model does not exist" });
      }
      return next();
    }
    
    if(assetType == "Audio"){
        console.log("Audio ----", req.body);
        await assetUpload(Asset, "audio", "asset", req, res, next);
    }
    // Blog
    // Document
    // Domain
    // Downloader
    // Enterprise
    // File
    // Link
    // Live
    // Text
    if(assetType == "Image"){
        console.log("Image ----", req.body);
        await assetUpload(Asset, "image", "asset", req, res, next);
    }
    // Metaverse
    // Music
    // Podcast
    // Real Estate
    // Shop
    if(assetType == "Video"){
        console.log("Image ----", req.body);
        await assetUpload(Asset, "image", "asset", req, res, next);
    }
    // Website

    // return res.status(200).json({ status: true, data: asset })
  } catch (error) {
    res.status(500).json({ status: false, error });
  }
});

//@desc update single asset
//route PUT /api/v1/assets/:id
//@access PRIVATE
export const updateAsset = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Check conditionals
  // await checkConditionals(next, req.params.id);

  let asset = await Asset.findById(req.params.id);
  if (!asset) {
    return next(
      new ErrorResponse(`Asset not updated with ID of ${req.params.id}`, 404)
    );
  }
  asset = await Asset.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: asset });
});

//@desc delete single asset
//route DELETE /api/v1/assets/:id
//@access PRIVATE
export const deleteAsset = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
  // Check Conditionals
  // await checkConditionals(next, req.params.id);

  const asset = await Asset.findById(req.params.id);

  if (!asset) {
    return next(
      new ErrorResponse(`Assets not found with of ${req.params.id}`, 404)
    );
  }

  // Make sure user is share owner
  if (asset.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this comment.`,
        404
      )
    );
  }

  asset.remove();
  res.status(200).json({ success: true, data: {}, msg: "Asset deleted" });
});

//@desc Upload photo to asset
//@route PUT /api/v1/asset/:id/cover
//@access PRIVATE
export const assetCoverUpload = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  // Check Conditionals
  // await checkConditionals(next, req.params.id);

  // console.log("Upload Asset ----", req.params.id);
  await assetUpload(Asset, "image", "asset", req, res, next);

  await Asset.findByIdAndUpdate(req.params.id, { pending: false });
});


//@desc Upload photo to asset
//@route PUT /api/v1/asset/:id/cover
//@access PRIVATE
export const downloadYoutube = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const url = req.body.url_download;
  const id = req.body.id;
  const isYoutubeLink = url.includes("youtube.com/watch?v=");

  if (!isYoutubeLink) {
    return res
      .status(406)
      .json({ success: false, message: "Paste Youtube Link" });
  }

  const video = `youtube_${url.split("=")[1]}.mp4`;

  console.log("Youtube ---");
  ytdl(url).pipe(fs.createWriteStream(`client/uploads/${id}/video/${video}`));
  res.status(200).json({ success: true, data: video });
});

export const youtube = asyncHandler(async (req: RequestWithArgs, res: Response, next: NextFunction) => {
  try {
    const url: string  = req.query.url_download;
    const videoId = await ytdl.getURLVideoID(url);
    const metInfo = await ytdl.getInfo(url);

    let data = {
      url: "https://www.youtube.com/embed/" + videoId,
      info: metInfo.formats,
    };

    return res.send(data);
  } catch (err) {
    return res.status(500);
  }
});
