import axios from 'axios';
import {ADD_TERM, GET_VOCAB} from './types';
import {handleError} from './errorActions';

export const add = term => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    const savedTerm = await axios.post('/api/vocab', term, {headers: {'x-auth-token': token}});
    const vocabList = await axios.get('/api/vocab', {headers: {'x-auth-token': token}});
    dispatch({
      type: ADD_TERM,
      payload: vocabList.data
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
  };
};

export const getVocab = () => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    const vocabList = await axios.get('/api/vocab', {headers: {'x-auth-token': token}});
    console.log(typeof vocabList.data);
    dispatch({
      type: GET_VOCAB,
      payload: vocabList.data
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
  };
};
