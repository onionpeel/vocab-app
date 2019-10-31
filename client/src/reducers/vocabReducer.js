import {ADD_TERM, GET_VOCAB, DELETE_TERM} from '../actions/types';

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
    case DELETE_TERM:
      return {
        ...state,
        list: state.vocabulary.list.filter(vocab => vocab._id !== action.payload)
      };
    default:
      return state;
  };
};
