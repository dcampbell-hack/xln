import axios from '../axios';

import {
CONNECTED_WALLET
} from './types';


export const getAddress = (address) => {
    return({
        type: GET_ADDRESS,
        payload: address
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