import * as types from '../constants/actionTypes';
import axios from 'axios';

export const addURL = (urlObj) => ({
  type: types.ADD_URL,
  payload: urlObj,
});

export const checkNow = (statusObj) => ({
  type: types.CHECK_NOW,
  payload: statusObj,
});

export const signupInput = (input) => ({
  type: types.SIGNUP_FORM_INPUT,
  payload: input,
});

export const signupSubmit = (input) => ({
  type: types.SIGNUP_FORM_SUBMIT,
  payload: input,
});

export const loginInput = (input) => ({
  type: types.LOGIN_FORM_INPUT,
  payload: input,
});

export const loginFailed = (loginErr) => ({
  type: types.LOGIN_FAILURE,
  payload: { ...loginErr },
});

export const loginStarted = () => ({
  type: types.LOGIN_START,
});

export const loginSuccess = (loginResponse) => ({
  type: types.LOGIN_SUCCESS,
  payload: loginResponse,
});

export const loginRequest = (input) => {
  return (dispatch) => {
    // let store know a request has started
    dispatch(loginStarted());
    // post request to server, asios automatically parses response
    axios
      .post('/auth/login', {
        username: input.username,
        password: input.password,
      })
      // expect user info object from the request
      .then((response) => {
        if (typeof response.data === 'string')
          dispatch(loginFailed(err.message));
        // console.log('loginRequest response.data: ', response.data);
        else dispatch(loginSuccess(response.data));
      })
      .catch((err) => dispatch(loginFailed(err.message)));
  };
};
