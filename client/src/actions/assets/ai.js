import React, { useReducer } from 'react';
import { createAsset } from './asset';

// TODO:  Call file aiAction

import axios from '../../axios';
import {
   CREATE_ASSET,
   OPEN_CV,
   GENERATE_ART,
   GET_ASSET_ART,
   GET_SINGLE_AI_ART,
   AI_ERROR,
   ASSET_ERROR
} from '../types';


export const generateArt = ({ id, assetId = "", blockchain, values: { model, prompt, size, numOfImg }}) => async dispatch => {

let res
let asset
let assetNum = assetId;

if( assetNum.length === 0 ){
    const promptSlug = prompt.split(" ").join("").slice(0, 47 ).replace(/[^a-zA-Z0-9 ]/g, '_').toLowerCase();

    try{
    asset = await axios.post(`/api/v1/assets/`, {
            assetType: 'AI Art',
            name: promptSlug,
            category: "ai, art, art generation, text prompt, prompt, artificial intelligence",
            description: prompt,
            price: 50,
            stock: 17 
          } );

    if( asset.data.success ){
        assetNum = asset.data.data.created
    }

    dispatch({
        type: CREATE_ASSET,
        payload: res.data
    })
    } catch(err){
    dispatch({ type: ASSET_ERROR, payload: err})
}
}

try {
    res = await axios.post(`/api/v1/assets/${assetNum}/ai/art`, { model, prompt, size, numOfImg });

        dispatch({
            type: GENERATE_ART,
            payload: res.data
        })
} catch(err){
    dispatch({ type: AI_ERROR, payload: err })
}
   
}


export const getAssetArt = (assetId) => async dispatch => {
    try {
       const res = await axios.get(`/api/v1/assets/${assetId}/ai/art`);
    
            dispatch({
                type: GET_ASSET_ART,
                payload: res.data
            })
    } catch(err){
        dispatch({ type: AI_ERROR, payload: err })
    }
}


export const getSingleAIArt = (asset) => async dispatch => {
    try {    
            dispatch({
                type: GET_SINGLE_AI_ART,
                payload: asset
            })
    } catch(err){
        dispatch({ type: AI_ERROR, payload: err })
    }
}




export const opencv = () => async dispatch => {
    try{
      console.log("Open cv action")
      const res = await axios.get(`/api/v1/ai/hands`);

      console.log('Action OpenCV  ----', res.data)

        dispatch({
            type: OPEN_CV,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: API_ERROR, payload: err})
    }
}