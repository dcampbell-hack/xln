import {
    AUTH_ERROR,
    CONNECTED_WALLET,
    } from'../../actions/types'
    
    const initState = {
        balance: 0,
        address: null,
        wallet: null, 
        error: null,
        status: null,
        isError: false,
        tokenRecieved: false,
        loading: true
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case CONNECTED_WALLET:
                console.log('Connected Payload ------', action)
                return { ...state, loading: false, isError: false, profile: { address: action.address, balance: action.balance, username: action.username } }
            case AUTH_ERROR:
                return { ...state, loading: false, isError: true, error: action.payload?.response?.data?.error, status: action.payload?.response?.status }
            default: 
               return state;
        }
    }