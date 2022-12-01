import React, { useReducer } from 'react';

import axios from '../axios';
import {
   OPEN_CV,
   GENERATE_ART
} from './types';

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

export const generateArt = (assetId, prompt) => async dispatch => {
    try{
        console.log("gen art")
      const res = await axios.post(`/api/v1/assets/${assetId}/ai/art`, {  prompt });

      console.log('Gen Art Action  ----', res.data)

        dispatch({
            type: GENERATE_ART,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: API_ERROR, payload: err})
    }
}