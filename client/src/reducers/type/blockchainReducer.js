import {
    AUTH_ERROR,
    GET_BALANCE,
    GET_ADDRESS,
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
            case GET_ADDRESS:
                console.log('REDUCER: Get address ------', action.payload)
                return { ...state, loading: false, isError: false, address: action.payload }
                case GET_BALANCE:
                    console.log('Get balance ------', action.payload)
                    return { ...state, loading: false, isError: false, balance: Number(action.payload).toFixed(6) }
            case CONNECTED_WALLET:
                console.log('Connected Payload ------', action.payload.data)
                return { ...state, loading: false, isError: false }
            case AUTH_ERROR:
                return { ...state, loading: false, isError: true, error: action.payload?.response?.data?.error, status: action.payload?.response?.status }
            default: 
               return state;
        }
    }