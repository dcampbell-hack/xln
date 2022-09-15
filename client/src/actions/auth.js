import axios from "../axios";

import {
  LOGIN,
  LOGOUT,
  REGISTER,
  REMOVE_ERROR,
  USERNAME,
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  AUTH_ERROR,
  ADD_NEW_ERROR,
  CONNECTED_WALLET,
} from "./types";

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/login", user);
    console.log("Login", res);

    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, status: err?.response?.status, error: 'login' });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/register", user);
    console.log("Register Values ---", user);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, status: err?.response?.status, error: 'register' });
  }
};

export const removeError = () => async (dispatch) => {
  dispatch({
    type: REMOVE_ERROR,
    payload: false,
  });
};

export const findUsername = (username) => async dispatch => {
  try{
    console.log({ username })
    const res = await axios.put(`/api/v1/auth/username`, username);
    console.log('find', res)
    dispatch({
        type: USERNAME,
        payload: res.data
    })
  
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err })
    }

}

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const res = await axios.post("api/v1/auth/forgotpassword", email);
    dispatch({
      type: FORGOT_PASSWORD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, status: err?.response?.status, error: 'forgotpassword' });
  }
};

export const resetPassword = (id) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/resetpassword", id);

    dispatch({
      type: RESET_PASSWORD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, status: err?.response?.status, error: 'resetpassword' });
  }
};


export const addNewError = (error) => async (dispatch) => {
    dispatch({
        type: ADD_NEW_ERROR,
        payload: error,
      });
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};
