import {
  AGENCY_FORM_UPDATE,
  AGENCY_CREATE,
  AGENCY_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  website: '',
  logo: '',
  city: 'nyc',
  type: 'creative'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGENCY_FORM_UPDATE:
      return { ...state, [action.field]: action.value };
    case AGENCY_CREATE:
      return INITIAL_STATE;
    case AGENCY_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
