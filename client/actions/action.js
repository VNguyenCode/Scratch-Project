import * as types from '../constants/actionTypes';

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

export const loginSubmit = (input) => ({
  type: types.LOGIN_FORM_SUBMIT,
  payload: input,
});
