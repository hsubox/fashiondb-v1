import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_BEGIN
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const logoutUserFail = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_FAIL
  });
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  });
};

export const logoutUser = ({ email, password}) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER_BEGIN });

    firebase.auth().signOut()
      .then(() => {
        logoutUserSuccess(dispatch);
      })
      .catch(() => {
        logoutUserFail(dispatch);
      });
  }
};
