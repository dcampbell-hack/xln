import {
GET_ASSET_ART,
GET_SINGLE_AI_ART,
 GENERATE_ART,
 OPEN_CV,
 AI_ERROR
} from'../../actions/types';

    const initState = {
        art: [],
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
            case GET_SINGLE_AI_ART:
                    return { ...state, loading: false, isError: false, assetArt: [ ...action.payload ] }
            case GENERATE_ART:
                console.log("Generate Art")
                return { ...state, created: action.payload.name,  loading: false, isError: false }
            case OPEN_CV:
                return { ...state, loading: false, isError: false }
            case AI_ERROR:

                let aiErrorMsg = "AI Error";
                 if(action.status == 500 ) aiErrorMsg = "AI Error Msg is 500"
                 console.log("AI Error", action.payload )
                 return { ...state, loading: false, isError: true  }
              
            default: 
               return state;
        }
    }