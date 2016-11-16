import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ModelFormReducer from './ModelFormReducer';
import ModelsReducer from './ModelsReducer';

export default combineReducers({
  auth: AuthReducer,
  modelForm: ModelFormReducer,
  models: ModelsReducer
});
