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
  isLoggingIn: false,
  isLoggedIn: false,
  currentUserId: '',
  currentUser: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    // signup reducers
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
        .post('/auth/signup', action.payload)
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
    // login reducers handling asyncs
    case types.LOGIN_FORM_INPUT: {
      const { name, value } = action.payload;
      return {
        ...state,
        login: {
          ...state.login,
          [name]: value,
        },
      };
    }

    case types.LOGIN_FAILURE: {
      // console.log('login_failure action.payload', action.playload);
      alert('Incorrect login information!');
      return {
        ...state,
        isLoggingIn: false,
      };
    }

    case types.LOGIN_START: {
      // console.log('login_start state before return state: ', state);
      return {
        ...state,
        isLoggingIn: true,
      };
    }

    case types.LOGIN_SUCCESS: {
      const { username, user_id } = action.payload;
      // console.log('login_success action.payload', action.payload);
      // console.log('login_success state before return state: ', state);
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        currentUser: username,
        currentUserId: user_id,
      };
    }

    default:
      return state;
  }
};

export default formReducer;
