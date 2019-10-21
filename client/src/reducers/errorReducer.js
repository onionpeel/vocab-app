import {NEW_ERROR} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  };
};
