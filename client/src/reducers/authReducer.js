import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        USER_LOADED,
        AUTHENTICATION_FAIL,
        LOGOUT_FAIL,
        LOGOUT_SUCCESS} from '../actions/types';

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case AUTHENTICATION_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };
    case LOGOUT_FAIL:
      return {
        ...state
      };
    default:
      return state;
  };
};
