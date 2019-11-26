import axios from 'axios';
import {ADD_TERM, GET_VOCAB, DELETE_TERM} from './types';
import {handleError} from './errorActions';

export const add = (term, refObj) => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    await axios.post('/api/vocab', term, {headers: {'x-auth-token': token}, CancelToken: refObj.token});
    const vocabList = await axios.get('/api/vocab', {headers: {'x-auth-token': token}, CancelToken: refObj.token});
    dispatch({
      type: ADD_TERM,
      payload: vocabList.data
    });
  } catch (err) {
    if (!axios.isCancel(err)) {
      dispatch(handleError(err.response.data, err.response.status));
    }
  };
};

export const retrieveVocab = () => {
  const source = axios.CancelToken.source();

  const getVocab = () => async (dispatch, getState) => {
    try {
      const token = getState().authenticate.token;
      const vocabList = await axios.get('/api/vocab',
        {
          headers: {'x-auth-token': token,
          cancelToken: source.token
        }
      });
      dispatch({
        type: GET_VOCAB,
        payload: vocabList.data
      });
    } catch (err) {
      if (!axios.isCancel(err)) {
        console.log(err.message)
        dispatch(handleError(err.response.data, err.response.status));
      };
    };
  };
  getVocab();

  return () => {
    source.cancel('Cancelling API request to get vocabulary');
  };
};


export const deleteTerm = (id, deleteObj) => async (dispatch, getState) => {
  try {
    const token = getState().authenticate.token;
    await axios.delete(`/api/vocab/${id}`, {headers: {'x-auth-token': token}, CancelToken: deleteObj.token});
    dispatch({
      type: DELETE_TERM,
      payload: id
    });
  } catch (err) {
    if (!axios.isCancel(err)) {
      dispatch(handleError(err.response.data, err.response.status));
    };
  };
};
