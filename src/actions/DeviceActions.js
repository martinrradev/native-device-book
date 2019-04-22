const firebase = require("firebase");
require("firebase/firestore");
import {
  DEVICES_REQUEST_STARTED,
  DEVICES_REQUEST_END,
  DEVICES_FETCH_SUCCESS,
  DEVICES_FETCH_FAILED,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAILED,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAILED
} from './types';

/**
 * Fetch and store all device, call toast events
 *
 * @method devicesFetch
 * @return {Obejct} the new state
 */
export const devicesFetch = () => {
  return (dispatch) => {
    dispatch({ type: DEVICES_REQUEST_STARTED });

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
      dispatch({ type: DEVICES_REQUEST_END })
    })
  }
}

/**
 * Send delete request and update store, call toast events
 *
 * @method deleteDevice
 * @return {Obejct} the new state
 */
export const deleteDevice = ({ id }) => {
  return (dispatch) => {
    dispatch({ type: DEVICES_REQUEST_STARTED });

    firebase.firestore().collection('devices').doc(id)
    .get()
    .then((document) => {
      return document.ref.delete();
    })
    .then(() => {
      dispatch({ type: DEVICE_DELETE_SUCCESS, id })
    })
    .catch((err) => {
      dispatch({ type: DEVICE_DELETE_FAILED, err })
    })
    .finally(() => {
      dispatch({ type: DEVICES_REQUEST_END })
    })
  }
}

/**
 * Send update request and update store, call toast events
 *
 * @method updateDevice
 * @return {Obejct} the new state
 */
export const updateDevice = ({ id }) => {
  return (dispatch) => {
    dispatch({ type: DEVICES_REQUEST_STARTED });

    firebase.firestore().collection('devices').doc(id)
    .get()
    .then((document) => {
      return document.ref.delete();
    })
    .then(() => {
      dispatch({ type: DEVICE_UPDATE_SUCCESS, id })
    })
    .catch((err) => {
      dispatch({ type: DEVICE_UPDATE_FAILED, err })
    })
    .finally(() => {
      dispatch({ type: DEVICES_REQUEST_END })
    })
  }
}
