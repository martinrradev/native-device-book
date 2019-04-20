import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

/**
 * Update email in the store
 *
 * @method emailChanged
 * @param {String} email
 * @return {Obejct} the new state
 */
export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

/**
 * Update password in the store
 *
 * @method passwordChanged
 * @param {String} password
 * @return {Obejct} the new state
 */
export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

/**
 * Authenticate user and dispatch next event
 *
 * @method loginUser
 * @param {String} email
 * @param {String} password
 * @return {Obejct} the new state
 */
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    //UPDATE FOR FIREBASE CLOUD
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => loginUserFail(dispatch, error))
  }
}

/**
 * Store the current user.
 *
 * @method loginUserSuccess
 * @param {Object} dispatch
 * @param {Object} user
 * @return {Obejct} the new state
 */
const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.admin();
}

/**
 * Store the login error.
 *
 * @method loginUserFail
 * @param {Object} dispatch
 * @param {Object} error
 * @return {Obejct} the new state
 */
const loginUserFail = (dispatch, error) => {
  dispatch( { type: LOGIN_USER_FAIL, payload: error });
}
