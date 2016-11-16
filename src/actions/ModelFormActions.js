import firebase from 'firebase';
import {
  MODEL_UPDATE,
  MODEL_CREATE
} from './types';

export const modelUpdate = (field, value) => {
  return {
    type: MODEL_UPDATE,
    field,
    value
  };
};

export const modelCreate = (params) => {
  return (dispatch) => {
    firebase.database().ref(`/models`)
      .push(params)
      .then(() => {
        dispatch({ type: MODEL_CREATE });
      });
  };
};
