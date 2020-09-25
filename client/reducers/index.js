import { combineReducers } from 'redux';
import outputReducer from './outputReducer';
import formReducer from './formReducer';

// combining reducers
const reducers = combineReducers({
  outputs: outputReducer,
  form: formReducer,
});

export default reducers;
