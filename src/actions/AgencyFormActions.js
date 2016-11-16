import firebase from 'firebase';
import { browserHistory } from 'react-router';
import {
  AGENCY_FORM_UPDATE,
  AGENCY_CREATE,
  AGENCY_SAVE_SUCCESS
} from './types';

export const agencyFormUpdate = (field, value) => {
  return {
    type: AGENCY_FORM_UPDATE,
    field,
    value
  };
};

export const agencyCreate = (params) => {
  return (dispatch) => {
    firebase.database().ref(`/agencies`)
      .push(params)
      .then(() => {
        dispatch({ type: AGENCY_CREATE });
        browserHistory.push('/agencies');
      });
  };
};

export const agencyEdit = (params, uid) => {
  return (dispatch) => {
    firebase.database().ref(`/agencies/${uid}`)
      .set(params)
      .then(() => {
        dispatch({ type: AGENCY_SAVE_SUCCESS });
        browserHistory.push('/agencies');
      });
  };
};

export const agencyDelete = (uid) => {
  return () => {
    firebase.database().ref(`/agencies/${uid}`)
      .remove()
      .then(() => {
        browserHistory.push('/agencies');
      });
  };
};
