import {NEW_ERROR} from './types';

export const handleError = (message, status) => dispatch => {
  dispatch({
    type: NEW_ERROR,
    payload: {
      message,
      status
    }
  });
};
