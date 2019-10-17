import axios from 'axios';
import {REGISTER_SUCCESS,
        REGISTER_FAIL} from './types';
import {handleError} from './errorActions';

export const registerUser = user => async dispatch => {
  try {
    const config = {
      headers: {"Content-Type": "application/json"}
    };

    const jsonUser = JSON.stringify(user);

    const newUser = await axios.post('/api/user', jsonUser, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: newUser.data
    });
  } catch (err) {
    console.log(err);
    handleError();
    dispatch({
      type: REGISTER_FAIL
    });
  };
};
