import {ADD_TERM} from '../actions/types';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERM:
      return {
        list: [...state.list, action.payload]
      };
    default:
      return state;
  };
};
