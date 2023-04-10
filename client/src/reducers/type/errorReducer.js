import {
    ADD_NEW_ERROR,
    REMOVE_ERROR,
    } from'../../actions/types'
    
    const initState = {
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
            case ADD_NEW_ERROR:
                return { ...state, isError: true, errors: [ ...state.errors, action.payload ]}
            case REMOVE_ERROR:
                return { ...state, loading: false, isError: false, errors: [] }
            default: 
               return state;
        }
    }