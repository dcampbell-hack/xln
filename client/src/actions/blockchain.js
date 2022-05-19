import axios from '../axios';

import {
GET_ADDRESS,
GET_BALANCE,
CONNECTED_WALLET,
AUTH_ERROR
} from './types';


export const getAddress = (address) => {
    return({
        type: GET_ADDRESS,
        payload: address
    })
}


export const updateWalletBalance = (balance) => {
    return({
        type: GET_BALANCE,
        payload: balance
    })
}


export const connectUserWallet = (payload) => async dispatch => {

    try{
        const res = await axios.post(`/api/v1/users/${payload.id}/wallets`, payload);
        dispatch({
            type: CONNECTED_WALLET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: AUTH_ERROR, payload: err})
    }

    if(!payload.code){
    return({
        type: CONNECTED_WALLET,
        balance: payload.balance,
        address: payload.address,
        username: payload.username,
        avatar: payload.avatar,
        cover: payload.cover
    })
} else {
    return({
        type: AUTH_ERROR,
        payload: {
            response: {
                data: {
                    error: payload.error
                },
                status: payload.code
            }
        }
    })
}
}