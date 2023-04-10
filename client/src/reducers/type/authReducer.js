import {
    LOGIN,
    LOGOUT,
    REGISTER, 
    UPDATE_PASSWORD,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
    AUTH_ERROR,
    ADD_NEW_ERROR,
    REMOVE_ERROR,
    CONNECTED_WALLET,
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
        errors: [],
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
                return { ...state, loading: false, isError: false, forgotPassword: { success: true } }
            case RESET_PASSWORD:
                return { ...state, loading: false, isError: false, }
            case ADD_NEW_ERROR:
                return { ...state, isError: true, errors: [ ...state.errors, action.payload ]}
            case REMOVE_ERROR:
                return { ...state, loading: false, isError: false, errors: [] }
             case AUTH_ERROR:
               let authErr = [];
               const authenError = "Please provide a valid email and password";
               const invalidCredential = "Invalid credentials";
               const nonExistentUser = "This user does not exist. Please register."
               const invalidFields = "Invalid fields. Please fill out all form fields."
                if(action.status == 400 ) authErr.push(authenError); 
                if(action.status == 401 ) authErr.push( invalidCredential );
                if(action.status == 500 ){
                    if(action.error == 'login') authErr.push( nonExistentUser );
                    if(action.error == 'register') authErr.push( invalidFields );
                }
                return { ...state, loading: false, isError: true, errors: [ ...state.errors, ...authErr ],  status: action.payload?.response?.status || 500, }
            default: 
               return state;
        }
    }