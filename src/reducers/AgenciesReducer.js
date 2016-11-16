import {
  AGENCIES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AGENCIES_FETCH_SUCCESS:
      return action.agencies;
    default:
      return state;
  }
};
