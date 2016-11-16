import firebase from 'firebase';
import { browserHistory } from 'react-router';
import {
  MODEL_FORM_UPDATE,
  MODEL_CREATE
} from './types';

export const modelFormUpdate = (field, value) => {
  return {
    type: MODEL_FORM_UPDATE,
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
        browserHistory.push('/models');
      });
  };
};
