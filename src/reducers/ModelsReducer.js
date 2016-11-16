import {
  MODELS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODELS_FETCH_SUCCESS:
      return action.models;
    default:
      return state;
  }
};
