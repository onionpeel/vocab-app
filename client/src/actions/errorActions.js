import {NEW_ERROR} from './types';

export const handleError = (message, status) => {
  return {
    type: NEW_ERROR,
    payload: {
      message,
      status
    }
  };
};
