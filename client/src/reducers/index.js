import {combineReducers} from 'redux';
import authenticate from './authReducer';
import errors from './errorReducer';

export default combineReducers({authenticate, errors});
