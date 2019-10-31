import axios from 'axios';
import {ADD_TERM, GET_VOCAB, DELETE_TERM} from './types';
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
    dispatch({
      type: GET_VOCAB,
      payload: vocabList.data
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
  };
};

export const deleteTerm = id => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    const deletedVocab = await axios.delete('/api/vocab', {id}, {headers: {'x-auth-token': token}});
    dispatch({
      type: DELETE_TERM,
      payload: deletedVocab._id
    });
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
  };
};
