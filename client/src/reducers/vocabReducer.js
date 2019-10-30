import {ADD_TERM, GET_VOCAB} from '../actions/types';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERM:
    case GET_VOCAB:
      return {
        list: action.payload
      };
    default:
      return state;
  };
};
