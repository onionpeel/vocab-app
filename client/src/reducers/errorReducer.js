import {NEW_ERROR, CLEAR_ERROR} from '../actions/types';

const initialState = {
  errorStatus: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_ERROR:
      return {
        errorMessage: action.payload.message.errors[0],
        errorStatus: true
      };
    case CLEAR_ERROR:
      return {
        errorStatus: null
      };
    default:
      return state;
  };
};
