import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        USER_LOADED,
        AUTHENTICATION_FAIL,
        LOGOUT_FAIL,
        LOGOUT_SUCCESS,
        IS_LOADING,
        IS_LOADED} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false
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
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case IS_LOADED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  };
};
