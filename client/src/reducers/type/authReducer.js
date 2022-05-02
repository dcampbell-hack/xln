import {
    LOGIN,
    LOGOUT,
    REGISTER, 
    UPDATE_PASSWORD,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
    AUTH_ERROR,
    CONNECTED_WALLET,
    LOAD_USER
    } from'../../actions/types'
    
    const initState = {
        login: {},
        register: {},
        profile: {
        username: "",
        avatar: "",
        cover: "",
        address: null, 
        balance: 0
        },
        error: null,
        status: null,
        isError: false,
        isAuthenticated: false,
        tokenRecieved: false,
        loading: true
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case LOGIN:
                return { ...state, loading: false, isError: false, login: action.payload, tokenRecieved: true, isAuthenticated: true }
            case LOGOUT:
                return { ...state, loading: false, isError: false, user: {}, login: {}, loading: false, tokenRecieved: false, isAuthenticated: false }
            case REGISTER:
                return { ...state, loading: false, isError: false, register: action.payload }
             case UPDATE_PASSWORD:
             return { ...state, loading: false, isError: false, }
            case FORGOT_PASSWORD:
                return { ...state, loading: false, isError: false, }
            case RESET_PASSWORD:
                return { ...state, loading: false, isError: false, }
             case AUTH_ERROR:
                return { ...state, loading: false, isError: true, error: action.payload?.response?.data?.error || 'check credentials' , status: action.payload?.response?.status || 500 }
            default: 
               return state;
        }
    }