import firebase from 'firebase';
import { DEVICES_FETCH } from './types';

export const devicesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: DEVICES_FETCH, payload: snapshot.val() })
    })
  }
}
