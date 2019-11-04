import {NEW_ERROR, CLEAR_ERROR} from './types';

export const handleError = (message, status) => {
  return {
    type: NEW_ERROR,
    payload: {
      message,
      status
    }
  };
};

export const clearError = () => async dispatch => {
  dispatch({
    type: CLEAR_ERROR
  });
};
