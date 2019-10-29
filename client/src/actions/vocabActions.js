import axios from 'axios';
import {ADD_TERM} from './types';
import {handleError} from './errorActions';

export const add = term => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    const savedTerm = await axios.post('/api/vocab', term, {headers: {'x-auth-token': token}});
    dispatch({
      type: ADD_TERM,
      payload: savedTerm.data
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
  };
};
