import {
    GET_ALL_AUDIO,
    GET_SINGLE_AUDIO,
    CREATE_AUDIO,
    AUDIO_ERROR
    } from'../../actions/types';
    
        const initState = {
            audios: [],
            error: null,
            errors: [],
            status: null,
            isError: false,
            loading: true
        }
        
        export default function(state = initState, action){
            switch(action.type){
                case GET_ALL_AUDIO:
                    return { ...state, loading: false, isError: false, audios: action.payload.data }
                case GET_SINGLE_AUDIO:
                        return { ...state, loading: false, isError: false, ...action.payload }
                case CREATE_AUDIO:
                    return { ...state, created: action.payload,  loading: false, isError: false }
                case AUDIO_ERROR:
                    let aiErrorMsg = "AUDIO Error";
                     if(action.status == 500 ) aiErrorMsg = "Audio Error Msg is 500"
                     return { ...state, loading: false, isError: true  }
                  
                default: 
                   return state;
            }
        }