import * as types from '../constants/actionTypes';

const initialState = {
  signup: {
    username: '',
    password: '',
    phoneNumber: ''
  },
  login: {
    username: '',
    password: '',
  },
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_FORM_INPUT: {
      const { name, value } = action.payload;
      console.log('state: ', state)
      return {
        ...state,
        signup: {
          ...state.signup,
          [name]: value
        }
      }
    }
    case types.SIGNUP_FORM_SUBMIT: {

    }
    // case types.LOGIN_FORM_INPUT: {

    // }
    // case types.LOGIN_FORM_SUBMIT: {

    // }
    default:
      return state;

  }
}

export default formReducer;