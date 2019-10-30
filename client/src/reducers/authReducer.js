import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        LOGOUT_FAIL,
        LOGOUT_SUCCESS,
        IS_LOADING,
        IS_LOADED,
        LOGIN_SUCCESS,
        LOGIN_FAIL} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };
    case LOGOUT_FAIL:
    case LOGIN_FAIL:
      return {
        ...state
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case IS_LOADED:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    default:
      return state;
  };
};
