import { combineReducers } from 'redux-immutable';
import auth from './auth';
import device from './device';
import quiz from './quiz';

const rootReducer = combineReducers({
  auth,
  device,
  quiz,
});

export default rootReducer;
