import { combineReducers } from 'redux-immutable';
import auth from './auth';
import session from './session';
import quiz from './quiz';

const rootReducer = combineReducers({
  auth,
  session,
  quiz,
});

export default rootReducer;
