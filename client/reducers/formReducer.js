import * as types from '../constants/actionTypes';
import axios from 'axios';

const initialState = {
  signup: {
    username: '',
    password: '',
    phoneNumber: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_FORM_INPUT: {
      const { name, value } = action.payload;
      console.log('signup state: ', state);
      return {
        ...state,
        signup: {
          ...state.signup,
          [name]: value,
        },
      };
    }
    case types.SIGNUP_FORM_SUBMIT: {
      axios
        .post('/auth/register', action.payload)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      return {
        ...state,
        signup: {
          ...state.signup,
          ...action.payload,
        },
      };
    }
    case types.LOGIN_FORM_INPUT: {
      const { name, value } = action.payload;
      // console.log('login state: ', state);
      return {
        ...state,
        login: {
          ...state.login,
          [name]: value,
        },
      };
    }
    case types.LOGIN_FORM_SUBMIT: {
      axios
        .post('/auth/login', action.payload)
        .then((response) => {
          console.log('response login: ', response);
        })
        .catch((err) => {
          console.log(err);
        });
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default formReducer;
