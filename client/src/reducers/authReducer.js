import {REGISTER_SUCCESS} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...action.payload
      };
    default:
      return state;
  };
};
