import axios from 'axios';
import {REGISTER_SUCCESS,
        REGISTER_FAIL,
        AUTHENTICATION_FAIL,
        USER_LOADED,
        LOGOUT_FAIL,
        LOGOUT_SUCCESS,
        IS_LOADING,
        IS_LOADED} from './types';
import {handleError} from './errorActions';

export const registerUser = user => async dispatch => {
  try {
    dispatch({
      type: IS_LOADING
    });

    const newUser = await axios.post('/api/user', user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: newUser.data
    });
    const token = newUser.data.token;

    dispatch({
      type: IS_LOADED
    });

    localStorage.setItem('token', token);
  } catch (err) {
    dispatch(handleError(err.response.data, err.response.status));
    dispatch({
      type: REGISTER_FAIL
    });
  };
};

export const logout = () => dispatch => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('state');
    dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
    });
    dispatch(handleError(err.response.data, err.response.status));
  };
};

// export const loadUser = () => async (dispatch, getItem) => {
//   try {
//     const token = await localStorage.getItem('token');
//     if (!token) {
//       return dispatch({
//         type: AUTHENTICATION_FAIL
//       });
//     };
//     console.log(token);
//     const user = await axios.get('/api/user/authenticate', {headers: {'Authorization': token}});
//     console.log(user.data);
//     dispatch({
//       type: USER_LOADED,
//       payload: user.data
//     });
//   } catch (err) {
//     dispatch(handleError(err.response.data, err.response.status));
//     dispatch({
//       type: AUTHENTICATION_FAIL
//     });
//   };
// };
