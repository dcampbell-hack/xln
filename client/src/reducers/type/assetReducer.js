import {
    ASSET_ERROR,
    ATTACH_ASSET,
    GET_ASSET,
    GET_ASSETS,
    GET_USER_ASSETS,
    CREATE_ASSET,
    UPDATE_ASSET
} from'../../actions/types';

const initState = {
    asset: {},
    assets: [],
    userAssets: [],
    phase: 'start',
    assetTypes: {
        placeholder: "Asset Types",
        isDescription: true,
        description: "Choose the type of asset to be generated.",
        types: [
            "Blog", 
            "Image", 
            "Links",
            "Live", 
            "Metaverse", 
            "Music",
            "Real Estate", 
            "Text", 
            "Video"
        ] 
    },
    category: {
        placeholder: "Choose a Category",
        isDescription: true,
        description: "If category is not available then enter a new one,",
        types: [] 
    },
    file: null,
    error: null,
    errors: [],
    status: null,
    isError: false,
    loading: true
}

export default function(state = initState, action){
    switch(action.type){
        case ATTACH_ASSET:
            return { ...state, file: action.payload, loading: false, isError: false }
        case GET_ASSET:
            return { ...state, loading: false, isError: false }
        case GET_ASSETS:
            return { ...state, loading: false, isError: false, loading: false }
        case GET_USER_ASSETS:
            return { ...state, userAssets: action.payload.data, loading: false, isError: false }
         case CREATE_ASSET:
         return { ...state, asset: action.payload, phase: 'middle', loading: false, isError: false, }
        case UPDATE_ASSET:
            return { ...state, loading: false, isError: false  }
        case ASSET_ERROR:
             return { ...state, loading: false, isError: true, errors: [] }
        default: 
           return state;
    }
}