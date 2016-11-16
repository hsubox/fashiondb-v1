import firebase from 'firebase';
import {
  MODELS_FETCH_SUCCESS
} from './types';

export const modelsFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/models`)
      .on('value', snapshot => {
        dispatch({ type: MODELS_FETCH_SUCCESS, models: snapshot.val() });
      });
  };
};
