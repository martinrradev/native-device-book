const firebase = require("firebase");
require("firebase/firestore");
import {
  TEAMS_REQUEST_STARTED,
  TEAMS_REQUEST_END,
  TEAMS_FETCH_SUCCESS,
  TEAMS_FETCH_FAILED
} from './types';

/**
 * Fetch and store all teams, call toast events
 *
 * @method teamsFetch
 * @return {Obejct} the new state
 */
export const teamsFetch = () => {
  return (dispatch) => {
    dispatch({ type: TEAMS_REQUEST_STARTED });

    firebase.firestore().collection('teams').get()
    .then((querySnapshot) => {
      let payload = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;

        payload.push(data);
      })
      dispatch({ type: TEAMS_FETCH_SUCCESS, payload })
    })
    .catch((err) => {
      dispatch({ type: TEAMS_FETCH_FAILED, err })
    })
    .finally(() => {
      dispatch({ type: TEAMS_REQUEST_END })
    })
  }
}
