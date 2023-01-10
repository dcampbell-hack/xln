import {
  ASSET_ERROR,
  ATTACH_ASSET,
  GET_ASSET,
  GET_ASSETS,
  GET_USER_ASSETS,
  CREATE_ASSET,
  UPDATE_ASSET,
} from "../../actions/types";

const initState = {
  assets: [],
  created: "",
  file: null,
  phase: "start",
  error: null,
  errors: [],
  status: null,
  isError: false,
  loading: true,
};

export default function (state = initState, action) {
  switch (action.type) {
    case ATTACH_ASSET:
      return {
        ...state,
        file: action.payload,
        pending: false,
        loading: false,
        isError: false,
      };
    case GET_ASSET:
      return {
        ...state,
        ...action.payload,
        loading: false,
        isError: false,
      };
    case GET_ASSETS:
      return { ...state, assets: action.payload, loading: false, isError: false, loading: false };
    case GET_USER_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
        isError: false,
      };
    case CREATE_ASSET:
      console.log("Asset is created reducer", action.payload.created )
      return {
        ...state,
        ...action.payload.data.asset,
        created: action.payload.data.created,
        loading: false,
        isError: false,
      };
    case UPDATE_ASSET:
      return { ...state, loading: false, isError: false };
    case ASSET_ERROR:
      console.log("ASSET_ERROR: ", JSON.stringify( action.payload ) )
      let assetErrorMsg = "Error";
       if( action.status == 500 ) assetErrorMsg = "INTERNAL SERVER ERROR" ;
       if(action.status == 400 ) assetErrorMsg = "BAD REQUEST" ;
       if( action.payload ) assetErrorMsg = "Duplicate Asset" ;

       return { ...state, loading: false, isError: true, errors: [ ...state.errors, !action.payload.message ? JSON.stringify( action?.payload?.message ) :  (action.payload.error ? action?.payload?.error : assetErrorMsg ) ],  status: action.payload.status, }
    
       default:
      return state;
  }
}
