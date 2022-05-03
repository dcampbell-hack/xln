import axios from '../axios';

import {
GET_ADDRESS,
GET_BALANCE,
CONNECTED_WALLET
} from './types';


export const getAddress = (address) => {

    console.log('Get Address Action ----', address)
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


export const connectUserWallet = (payload) => {

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