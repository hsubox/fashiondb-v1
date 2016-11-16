import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ModelFormReducer from './ModelFormReducer';

export default combineReducers({
  auth: AuthReducer,
  modelForm: ModelFormReducer
});
