import Axios from 'axios';
import {
    ADDRESS_CREATE_REQUEST,
    ADDRESS_CREATE_SUCCESS,
    ADDRESS_CREATE_FAIL,
    ADDRESS_LIST_REQUEST,
    ADDRESS_LIST_SUCCESS,
    ADDRESS_LIST_FAIL
  } from '../constants/addressConstants';

export const listAddresses = () => async (dispatch) => {
dispatch({ type: ADDRESS_LIST_REQUEST });
try {
    const { data } = await Axios.get('/api/address', {
    });
    console.log(data)
    dispatch({ type: ADDRESS_LIST_SUCCESS, payload: data });
} catch (error) {
    dispatch({ type: ADDRESS_LIST_FAIL, payload: error.message });
}
};