import axios from '../../axios';
import {
    ATTACH_ASSET,
    GET_ASSET,
    GET_ASSETS,
    GET_USER_ASSETS,
    CREATE_ASSET,
    UPDATE_ASSET,
    DELETE_ASSET,
    YOUTUBE,
    ASSET_ERROR
} from '../types';

export const attachAsset = ({ id, values }) => async (dispatch) => {

    const config = {
        Headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

    try {
      console.log('Attach Asset Action ----', id, values)
            let res;
            const formData = new FormData();

          if( values.cover ){
            formData.append('file', values.cover )
             res = await axios.post(`/api/v1/assets/${id}/cover`, formData, config);
            }

      dispatch({
        type: ATTACH_ASSET,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: ASSET_ERROR, status: 404, error: 'login' });
    }
  };



export const createAsset = ({ id, blockchain, values }) => async (dispatch) => {
   console.log("create asset")
    const config = {
        Headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

    try {
      console.log('Create Asset Action ----', values)
            // let res;
            // const formData = new FormData();
           let res = await axios.post(`/api/v1/assets/`, values );

        //   if( values.cover ){
        //     formData.append('file', values.cover )
        //      res = await axios.post(`/api/v1/assets/`, values , config);
        //     }

        

    //   const res = await axios.post("/api/v1/assets", asset);
    //   console.log("createAsset Action ---", res);
    //  console.log(res)
      dispatch({
        type: CREATE_ASSET,
        payload: res.data.data
      });
    } catch (err) {
      console.log("Assets Error: ", err)
      dispatch({ type: ASSET_ERROR, status: 404, error: 'login' });
    }
  };


export const downloadYoutube = (url) => async dispatch => {
  try{
    console.log({ url })
     const res = await  axios.post('/api/v1/assets/youtube', url)
     dispatch({ type: YOUTUBE, payload: res.data })
  } catch(err){
    dispatch({ type: ASSET_ERROR, payload: err})
  }
}


  export const getAllAssets = () => async dispatch => {
    try{
        const res = await axios.get('/api/v1/assets?limit=100');
        dispatch({
            type: GET_ASSETS,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: ASSET_ERROR, payload: err})
    }
}

export const getUserAssets = (userId) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/assets?user=${userId}&&limit=100`);

        dispatch({
            type: GET_USER_ASSETS,
            payload: res.data.data
        })
    } catch(err){
        dispatch({ type: ASSET_ERROR, payload: err})
    }
}


export const getSingleAsset = (id) => async dispatch => {
    try{

        const res = await axios.get(`/api/v1/assets/${id}`);
        console.log("Get Single Asset ----", res)
        dispatch({
            type: GET_ASSET,
            payload: res.data.data
        })
    } catch(err){
        dispatch({ type: ASSET_ERROR, payload: err})
    }
}


export const updateAsset = id => async dispatch => {
    try{
        const res = await axios.put(`/api/v1/assets/${id}`);
        dispatch({
            type: UPDATE_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: ASSET_ERROR, payload: err})
    }
}

export const deleteAsset = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/v1/assets/${id}`);
        dispatch({
            type: DELETE_ASSET,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: ASSET_ERROR, payload: err})
    }
}