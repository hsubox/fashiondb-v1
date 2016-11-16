import firebase from 'firebase';
import { browserHistory } from 'react-router';
import {
  MODEL_FORM_UPDATE,
  MODEL_CREATE,
  MODEL_SAVE_SUCCESS
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

export const modelEdit = (params, uid) => {
  return (dispatch) => {
    firebase.database().ref(`/models/${uid}`)
      .set(params)
      .then(() => {
        dispatch({ type: MODEL_SAVE_SUCCESS });
        browserHistory.push('/models');
      });
  };
};

export const modelDelete = (uid) => {
  return () => {
    firebase.database().ref(`/models/${uid}`)
      .remove()
      .then(() => {
        browserHistory.push('/models');
      });
  };
};
