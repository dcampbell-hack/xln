import React, { useReducer } from 'react';
import { createAsset } from './asset';

// TODO:  Call file aiAction

import axios from '../../axios';
import {
   OPEN_CV,
   TEXT_TO_IMAGE,
   GET_ASSET_ART,
   GET_SINGLE_AI_ART,
   GET_CHAT_MSG,
   POST_CHAT_MSG,
   SELECT_LLM,
   AI_ERROR
} from '../types';


export const textToImage = ({ id, assetId = "", blockchain, values }) => async dispatch => {

    try {
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
          type: TEXT_TO_IMAGE,
          payload: res.data.data
        });
      } catch (err) {
        console.log("Assets Error: ", err)
        addNewError(err)
      }
   
}

export const getChatMessages = (id) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/assets/${id}/ai/chat`);

    dispatch({
        type: GET_CHAT_MSG,
        payload: res.data
    })
    } catch(err){
    console.log("Get Chat Messages Failed ---", err)
    dispatch({ type: AI_ERROR, payload: err})
}

}

export const postChatMessage = ( assetId, prompt ) => async dispatch => {
    try{
        // const object = prompt.id = assetId;
        console.log("Action: PostChatMesage", prompt )
        const res = await axios.post(`/api/v1/assets/${assetId}/ai/chat`,  prompt );
    
        dispatch({
            type: POST_CHAT_MSG,
            payload: res.data
        })

    } catch(error){
        dispatch({ type: AI_ERROR, error })
    }
}

export const selectLangModel = ( assetId, prompt ) => async dispatch => {
    console.log("Action: SelectLangModel ---------" )
    try{
        // const object = prompt.id = assetId;
        console.log("Action: SelectLangModel", prompt )
        const res = await axios.post(`/api/v1/assets/${assetId}/ai/llm`,  prompt );
    
        dispatch({
            type: SELECT_LLM,
            payload: res.data
        })

    } catch(error){
        dispatch({ type: AI_ERROR, error })
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