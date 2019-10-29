import {combineReducers} from 'redux';
import authenticate from './authReducer';
import errors from './errorReducer';
import vocabulary from './vocabReducer';

export default combineReducers({authenticate, vocabulary, errors});
