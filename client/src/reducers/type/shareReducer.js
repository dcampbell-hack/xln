import {
    GET_SHARE,
    GET_SHARES,
    GET_USER_SHARES,
    CREATE_SHARE,
    UPDATE_SHARE,
    DELETE_SHARE,
    SHARE_ERROR
} from'../../actions/types';

    const initState = {
        sharesOwned: 0,
        error: null,
        errors: [],
        status: null,
        isError: false,
        isAuthenticated: false,
        loading: true
    }
    
    export default function(state = initState, action){
        switch(action.type){
            case GET_SHARE:
                return { ...state, loading: false, isError: false, isAuthenticated: true }
            case GET_SHARES:
                return { ...state, loading: false, isError: false, loading: false }
            case GET_USER_SHARES:
                return { ...state, loading: false, isError: false, error: [] }
             case CREATE_SHARE:
             return { ...state, loading: false, isError: false, }
            case UPDATE_SHARE:
                return { ...state, loading: false, isError: false }
            case DELETE_SHARE:
                return { ...state, loading: false, isError: false, }
            case SHARE_ERROR:
                let shareErr = [];
                const shareNotFound = "User does not own any shares";
                 if(action.status == 404 ) shareErr.push( shareNotFound );
              return { ...state, loading: false, isError: true, errors: [ ...shareErr ] }
            default: 
               return state;
        }
    }