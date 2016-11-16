import {
  LOGIN_FORM_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_BEGIN
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_FORM_UPDATE:
      return { ...state, [action.field]: action.value };
    case LOGIN_USER_BEGIN:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.user };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication failed', password: '', loading: false };
    case LOGOUT_USER_BEGIN:
      return { ...state, loading: true, error: '' };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE};
    case LOGOUT_USER_FAIL:
      return { ...state, error: 'Cannot log user out. Please contact system administrator'};
    default:
      return state;
  }
};
