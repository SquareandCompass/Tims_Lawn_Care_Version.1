// frontend/src/actions/authActions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signup', { name, email, password });
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
     dispatch({ type: REGISTER_FAIL });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};