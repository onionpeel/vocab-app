import axios from 'axios';
import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT_FAIL,
        LOGOUT_SUCCESS,
        IS_LOADING,
        IS_LOADED,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        GET_VOCAB} from './types';
import {handleError} from './errorActions';

export const registerUser = user => async dispatch => {
  try {
    dispatch({
      type: IS_LOADING
    });
    const newUser = await axios.post('/api/user', user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: newUser.data
    });
    const token = newUser.data.token;

    dispatch({
      type: IS_LOADED
    });

    localStorage.setItem('token', token);
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
    dispatch({
      type: REGISTER_FAIL
    });
  };
};

export const login = user => async dispatch => {
  try {
    dispatch({
      type: IS_LOADING
    });

    const loggedInUser = await axios.post('/api/user/login', user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loggedInUser.data
    });

    const token = loggedInUser.data.token;
    localStorage.setItem('token', token);

    const vocabList = await axios.get('/api/vocab', {headers: {'x-auth-token': token}});
    dispatch({
      type: GET_VOCAB,
      payload: vocabList.data
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
    dispatch({
      type: LOGIN_FAIL
    });
  };
};

export const logout = () => dispatch => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('state');
    dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
    });
    dispatch(handleError(err.response.data, err.response.status));
  };
};
