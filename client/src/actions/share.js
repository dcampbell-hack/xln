import axios from '../axios';
import {
    GET_SHARE,
    GET_SHARES,
    GET_USER_SHARES,
    CREATE_SHARE,
    UPDATE_SHARE,
    DELETE_SHARE,
    SHARE_ERROR
} from './types';


export const getUserShares = (userId) => async dispatch => {
    try{
        const res = await axios.get(`/api/v1/shares/${userId}`);
        dispatch({
            type: GET_USER_SHARES,
            payload: res.data
        })
    } catch(err){
        dispatch({ type: SHARE_ERROR, 
            status: err?.response?.status, error: 'getUserShares'
        })
    }
}