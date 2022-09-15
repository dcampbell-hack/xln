import React, { useReducer } from 'react';
import axios from '../axios';
import {
    GET_ASSET,
    GET_ASSETS,
    GET_USER_ASSETS,
    CREATE_ASSET,
    UPDATE_ASSET,
    DELETE_ASSET,
    AUTH_ERROR
} from './types';


export const getAllAssets = () => async dispatch => {
    try{
        const res = await axios.get('/api/v1/assets?limit=100');
        dispatch({
            type: GET_ASSETS,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}

export const getUserAssets = (userId) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/assets/${userId}`);
        dispatch({
            type: GET_USER_ASSETS,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}

export const getSingleAsset = (id) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/assets/${id}`);
        dispatch({
            type: GET_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}

export const createAsset = (body) => async dispatch => {
    try{
        const assetData = await axios.post(`/api/v1/assets`, body);
        const assetFile = await axios.post(`/api/v1/assets/5f1c5d18c32d4481e03c1619/cover`, body);
        dispatch({
            type: CREATE_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}

export const updateAsset = id => async dispatch => {
    try{
        const res = await axios.put(`/api/v1/assets/${id}`);
        dispatch({
            type: UPDATE_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}

export const deleteAsset = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/v1/assets/${id}`);
        dispatch({
            type: DELETE_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }
}