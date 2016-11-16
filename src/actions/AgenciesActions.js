import firebase from 'firebase';
import {
  AGENCIES_FETCH_SUCCESS
} from './types';

export const agenciesFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/agencies`)
      .on('value', snapshot => {
        dispatch({ type: AGENCIES_FETCH_SUCCESS, agencies: snapshot.val() });
      });
  };
};
