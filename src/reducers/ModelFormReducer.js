import {
  MODEL_FORM_UPDATE,
  MODEL_CREATE,
  MODEL_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  gender: 'f',
  race: 'caucasian',
  birthdate: '1990-01-01',
  nationality: 'US',
  agencyMother: 'N/A',
  agencyNewYork: 'N/A',
  agencyLondon: 'N/A',
  agencyMilan: 'N/A',
  agencyParis: 'N/A',
  bio: '',
  instagram: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODEL_FORM_UPDATE:
      return { ...state, [action.field]: action.value };
    case MODEL_CREATE:
      return INITIAL_STATE;
    case MODEL_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
