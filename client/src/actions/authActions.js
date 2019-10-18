import axios from 'axios';
import {REGISTER_SUCCESS,
        REGISTER_FAIL} from './types';
import {handleError} from './errorActions';

export const registerUser = user => async dispatch => {
  try {
    const newUser = await axios.post('/api/user', user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: newUser.data
    });
    const token = newUser.data.token;

    localStorage.setItem('token', token);
  } catch (err) {
    console.log(err);
    // handleError();
    // dispatch({
    //   type: REGISTER_FAIL
    // });
  };
};
