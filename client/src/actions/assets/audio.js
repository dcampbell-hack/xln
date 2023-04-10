import axios from '../../axios';
import {
   GET_ALL_AUDIO,
   GET_SINGLE_AUDIO,
   CREATE_AUDIO,
   AUDIO_ERROR
} from '../types';

export const getAllAudio = (assetId) => async dispatch => {
    try {
       const res = await axios.get(`/api/v1/assets/audio`);
    
            dispatch({
                type: GET_ALL_AUDIO,
                payload: res.data
            })
    } catch(err){
        dispatch({ type: AUDIO_ERROR, payload: err })
    }
}


export const getSingleAudio = (assetId) => async dispatch => {
    try {
       const res = await axios.get(`/api/v1/assets/audio`);
    
            dispatch({
                type: GET_SINGLE_AUDIO,
                payload: res.data
            })
    } catch(err){
        dispatch({ type: AUDIO_ERROR, payload: err })
    }
}

export const createAudioAsset = ( asset ) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/assets/audio`);
     
             dispatch({
                 type: CREATE_AUDIO,
                 payload: res.data
             })
     } catch(err){
         dispatch({ type: AUDIO_ERROR, payload: err })
     }
}