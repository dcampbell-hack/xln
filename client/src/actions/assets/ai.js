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


export const textToImage = ({ id, assetId = "", blockchain, values }) => async dispatch => {

    try {

        console.log("create asset", values)
        const config = {
            Headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
              const formData = new FormData();
              if(values.file) formData.append('file', values.file)
              if(values.file) formData.append('cover', values.cover )
              values.files = formData;
  
            if(values.assetType === "AI Art" && !values["model"] && !values["prompt"] && !values["size"]) return addNewError("Fill out form")
  
            if( values.assetType === "AI Art" ) values.description = values.description + " : " + values.prompt
             
            const res = await axios.post(`/api/v1/assets/`, values , config);
  
        dispatch({
          type: CREATE_ASSET,
          payload: res.data.data
        });
      } catch (err) {
        console.log("Assets Error: ", err)
        addNewError(err)
      }
   
}

export const textToAiChat = () => async dispatch => {

    try{
     


    dispatch({
        type: CREATE_ASSET,
        payload: 'res.data'
    })
    } catch(err){
    dispatch({ type: ASSET_ERROR, payload: err})
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