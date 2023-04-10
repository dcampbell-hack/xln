import axios from '../axios';
import {
    ADD_NEW_ERROR,
    REMOVE_ERROR
} from './types';


export const addNewError = (error) => async (dispatch) => {
    dispatch({
        type: ADD_NEW_ERROR,
        payload: error,
      });
}

export const removeError = () => async (dispatch) => {
    dispatch({
      type: REMOVE_ERROR,
      payload: false,
    });
  };