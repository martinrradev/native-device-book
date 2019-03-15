const firebase = require("firebase");
require("firebase/firestore");
import { DEVICES_FETCH } from './types';

export const devicesFetch = () => {
  return (dispatch) => {
    firebase.firestore().collection('devices').get().then((querySnapshot) => {
      let payload = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;

        payload.push(data);
      });
      dispatch({ type: DEVICES_FETCH, payload })
    })
  }
}
