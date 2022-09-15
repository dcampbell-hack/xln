import React, { useReducer } from 'react';
import axios from '../axios'; 
import {
  LOAD_USER,
  GET_USER,
  GET_USERS, 
  GET_USER_BY_USERNAME,
  UPLOAD_USER_FILE,
  UPDATE_USER,
  DELETE_USER,
  USER_ERROR
} from './types';

export const loadUser = () => async  dispatch => {
  try{
  const res = await axios.get('/api/v1/auth/me');
  
  dispatch({
      type: LOAD_USER,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}


export const getUser = id => async  dispatch => {
  try{
  const res = await axios.get(`/api/v1/users/${id}`);
  dispatch({
      type: GET_USER,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}

export const getUserByUsername = username => async  dispatch => {
  try{
  const res = await axios.get(`/api/v1/users?username=${username}`);
  dispatch({
      type: GET_USER_BY_USERNAME,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}

export const getUsers = () => async  dispatch => {
  try{
  const res = await axios.get(`/api/v1/users`);
  dispatch({
      type: GET_USERS,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}

export const uploadUserFile = (id, values ) => async  dispatch => {

  const config = {
    Headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  try{
  if(values.fileLoaded){
    const formData = new FormData();
  let res;

  if( values.avatar ){
    formData.append('file', values.avatar );
  res = await axios.put(`/api/v1/users/${id}/avatar`, formData, config);
  }

  if( values.cover ){
    formData.append('file', values.cover )
     res = await axios.put(`/api/v1/users/${id}/cover`, formData, config);
    }

  dispatch({
      type: UPLOAD_USER_FILE,
      payload: res.data
  })
} else {
  dispatch({ 
    type: USER_ERROR, 
    payload: 'File is not defined' 
  })
      }
  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}


export const updateUser = (id, user) => async  dispatch => {
  try{

  const res = await axios.put(`/api/v1/users/${id}`, user);
  dispatch({
      type: UPDATE_USER,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}

export const deleteUser = id => async  dispatch => {
  try{
  const res = await axios.get(`/api/v1/users/${id}`);
  dispatch({
      type: DELETE_USER,
      payload: res.data
  })

  } catch(err){
      dispatch({ type: USER_ERROR, payload: err })
  }
}