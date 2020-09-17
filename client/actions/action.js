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

export const loginSubmit = (input) => ({
  type: types.LOGIN_FORM_SUBMIT,
  payload: input,
});

export const loginHasErrored = (bool) => ({
  type: types.ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const loginIsLoading = (bool) => ({
  type: types.ITEMS_IS_LOADING,
  isLoading: bool,
});

export const loginFetchDataSuccess = (items) => ({
  type: types.ITEMS_FETCH_DATA_SUCCESS,
  payload: items,
});

export const loginFetchData = (input) => (dispatch) => {
  dispatch(loginIsLoading(true));
  // fetch(url)
  axios
    .post('/auth/login', input)
    .then((response) => {
      // if (!response.ok) {
      //   throw Error(response.statusText);
      // }
      dispatch(loginIsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((result) => {
      dispatch(loginFetchDataSuccess(result));
      return {
        ...state,
        login: {
          ...state.login,
          ...result,
        },
      };
    })
    .catch(() => dispatch(loginHasErrored(true)));
};
