import {
    LOAD_USER,
    GET_USER,
    GET_USERS,
    GET_USER_BY_USERNAME,
    UPLOAD_USER_FILE,
    USERNAME,
    CREATE_USER, 
    UPDATE_USER,
    DELETE_USER,
    USER_ERROR,
    } from'../../actions/types'
;    
    const initState = {
        users: [],
        id: "",
        sharesOwned: 0,
        assetsOwned: 0,
        avatar: "",
        cover: "",
        username: "",
        firstname: "",
        lastname: "",
        email: '',
        role: "",
        media: false,
        accountCreated: null,
        username: null,
        files: [],
        followers: [],
        following: [],
        socialLinks: [],
        updated: null,
        hasWallet: false,
        loading: true,
        isError: false,
        isAuthenticated: false,
        error: null 
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case LOAD_USER:
                let media;
               if( action.payload.data.avatar.length > 0 ) media = true;
                 else media = false;
                return { ...state, ...action.payload.data, media, loading: false, accountCreated: true, isAuthenticated: true }   
            case GET_USER:
                return { ...state, user: action.payload, loading: false }
            case GET_USER_BY_USERNAME:
                return { ...state, user: action.payload, loading: false }
            case GET_USERS:
                return { ...state, users: action.payload, loading: false }
            case UPLOAD_USER_FILE:
                return { ...state, avatar: action.payload, loading: false, updated: true }
            case CREATE_USER:
                return { ...state, user: action.payload, loading: false }
             case UPDATE_USER:
                return { 
                    ...state, 
                    firstname: action.payload.firstname, 
                    lastname: action.payload.lastname, 
                    username: action.payload.username, 
                    updated: true, 
                    loading: false,
                    socialLinks: action.payload.socialLinks
                }
            case USERNAME:
                return { ...state, loading: false, username: action.username }
             case DELETE_USER:
                return state
            case USER_ERROR:
                return { ...state, isError: true, error: 'username is taken' }
            default: 
               return state;
        }
    }