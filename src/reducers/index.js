import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ModelFormReducer from './ModelFormReducer';
import ModelsReducer from './ModelsReducer';
import AgencyFormReducer from './AgencyFormReducer';
import AgenciesReducer from './AgenciesReducer';

export default combineReducers({
  auth: AuthReducer,
  modelForm: ModelFormReducer,
  models: ModelsReducer,
  agencyForm: AgencyFormReducer,
  agencies: AgenciesReducer,
});
