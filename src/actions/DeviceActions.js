const firebase = require("firebase");
require("firebase/firestore");
import { DEVICES_FETCH_STARTED, DEVICES_FETCH_SUCCESS, DEVICES_FETCH_FAILED, DEVICES_FETCH_END } from './types';

/**
 * Fetch and store all device, call toast events
 *
 * @method devicesFetch
 * @return {Obejct} the new state
 */
export const devicesFetch = () => {
  return (dispatch) => {
    dispatch({ type: DEVICES_FETCH_STARTED });

    firebase.firestore().collection('devices').get()
    .then((querySnapshot) => {
      let payload = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;

        payload.push(data);
      })
      dispatch({ type: DEVICES_FETCH_SUCCESS, payload })
    })
    .catch((err) => {
      dispatch({ type: DEVICES_FETCH_FAILED, err })
    })
    .finally(() => {
      dispatch({ type: DEVICES_FETCH_END })
    })
  }
}
