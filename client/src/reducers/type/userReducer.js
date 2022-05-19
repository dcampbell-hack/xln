import {
    LOAD_USER,
    GET_USER,
    GET_USERS,
    GET_USER_BY_USERNAME,
    UPDATE_USER_AVATAR,
    CREATE_USER, 
    UPDATE_USER,
    DELETE_USER,
    USER_ERROR,
    } from'../../actions/types'
;    
    const initState = {
        address: null,
        balance: null,
        users: [],
        id: "",
        assetsOwned: 0,
        avatar: "",
        cover: "",
        username: "",
        firstname: "",
        lastname: "",
        email: '',
        role: "",
        accountCreated: null,
        files: [],
        totalBalance: 0,
        hasWallet: false,
        loading: false,
        error: "" 
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case LOAD_USER:
            const { } = action.payload.data;
                return { ...state, ...action.payload.data, loading: false, accountCreated: true }   
            case GET_USER:
                return { ...state, user: action.payload, loading: true }
            case GET_USER_BY_USERNAME:
                return { ...state, user: action.payload, loading: true }
            case GET_USERS:
                return { ...state, users: action.payload, loading: true }
            case UPDATE_USER_AVATAR:
                return { ...state, avatar: action.payload, loading: true}
            case CREATE_USER:
                return { ...state, user: action.payload }
             case UPDATE_USER:
                return state
             case DELETE_USER:
                return state
            case USER_ERROR:
                return state
            default: 
               return state;
        }
    }