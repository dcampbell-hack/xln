import {
    OPEN_CV,
    TEXT_TO_IMAGE,
    GET_ASSET_ART,
    GET_SINGLE_AI_ART,
    GET_CHAT_MSG,
    POST_CHAT_MSG,
    SELECT_LLM,
    AI_ERROR
} from'../../actions/types';

    const initState = {
        art: [],
        chats: [],
        chat: {},
        created: "",
        model: "",
        prompt: "",
        size: null,
        numOfImg: 0,
        error: null,
        errors: [],
        status: null,
        isError: false,
        loading: true
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case GET_ASSET_ART:
                console.log("GET_ASSET_ART", action.payload )
                return { ...state, loading: false, isError: false, art: action.payload.data }
            case GET_CHAT_MSG:
                // Expect list of chats from assetId
                console.log("Expect list of chats from assetId")
                return { ...state, loading: false, isError: false, chats: action.payload.data, chat: action.payload.data.slice(-1)[0]  }
            case GET_SINGLE_AI_ART:
                    return { ...state, loading: false, isError: false, assetArt: [ ...action.payload ] }
            case TEXT_TO_IMAGE:
                return { ...state, created: action.payload.name,  loading: false, isError: false }
            case OPEN_CV:
                return { ...state, loading: false, isError: false }
            case POST_CHAT_MSG:
                console.log("POST_CHAT_MSG -----", action.payload )
                return { ...state, chat: { ...action.payload.data }, chats: [ ...state.chats, action.payload], loading: false, isError: false}
            case SELECT_LLM:
                return { ...state, loading: false, isError: false }
            case AI_ERROR:
                console.log("AI Error", action.error )
                return { ...state, loading: false, isError: true  }
              
            default: 
               return state;
        }
    }