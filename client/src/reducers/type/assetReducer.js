import {
    ASSET_ERROR,
    GET_ASSET,
    GET_ASSETS,
    GET_USER_ASSETS,
    CREATE_ASSET,
    UPDATE_ASSET
} from'../../actions/types';

const initState = {
    error: null,
    errors: [],
    status: null,
    isError: false,
    isAuthenticated: false,
    loading: true
}

export default function(state = initState, action){
    switch(action.type){
        case GET_ASSET:
            return { ...state, loading: false, isError: false }
        case GET_ASSETS:
            return { ...state, loading: false, isError: false, loading: false }
        case GET_USER_ASSETS:
            return { ...state, loading: false, isError: false }
         case CREATE_ASSET:
         return { ...state, loading: false, isError: false, }
        case UPDATE_ASSET:
            return { ...state, loading: false, isError: false  }
        case ASSET_ERROR:
             return { ...state, loading: false, isError: true, errors: [] }
        default: 
           return state;
    }
}