import axios from '../axios';

import {
  LOGIN,
  LOGOUT,
  REGISTER, 
  UPDATE_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  AUTH_ERROR,
  CONNECTED_WALLET
} from './types';


export const loginUser = (user) => async  dispatch => {

try{
const res = await axios.post('/api/v1/auth/login', user);

dispatch({
    type: LOGIN,
    payload: res.data
})
} catch(err){
    dispatch({ type: AUTH_ERROR, payload: err })
}
}


export const registerUser = (user) => async dispatch => {
 try{
    const res = await axios.post('/api/v1/auth/register', user);
    dispatch({
        type: REGISTER,
        payload: res.data
    })
} catch(err){
    dispatch({ type: AUTH_ERROR, payload: err})
}
}


export const logoutUser = () => {
    
    return({
        type: LOGOUT,
        payload: {}
    })
}

 