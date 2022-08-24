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
        forgotPassword: {},
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
                console.log('Whats hatnen', action.payload )
                return { ...state, loading: false, isError: false, login: action.payload, tokenRecieved: true, isAuthenticated: true }
            case LOGOUT:
                return { ...state, loading: false, isError: false, user: {}, login: {}, loading: false, tokenRecieved: false, isAuthenticated: false }
            case REGISTER:
                return { ...state, loading: false, isError: false, register: action.payload }
             case UPDATE_PASSWORD:
             return { ...state, loading: false, isError: false, }
            case FORGOT_PASSWORD:
                return { ...state, loading: false, isError: false, forgotPassword: { success: true } }
            case RESET_PASSWORD:
                return { ...state, loading: false, isError: false, }
             case AUTH_ERROR:
                console.log('Error ---->', action.payload)
                return { ...state, loading: false, isError: true, forgotPassword: { error: action.payload.response.data.error }, error:  action.payload?.response?.data?.error || 'check form inputs' , status: action.payload?.response?.status || 500 }
            default: 
               return state;
        }
    }