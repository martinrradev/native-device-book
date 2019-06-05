const firebase = require("firebase");
require("firebase/firestore");
import { Actions } from 'react-native-router-flux';
import {
  DEVICES_REQUEST_STARTED,
  DEVICES_REQUEST_END,
  DEVICES_FETCH_SUCCESS,
  DEVICES_FETCH_FAILED,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAILED,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAILED,
  DEVICE_BOOKING
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
        data.externalId = doc.id;

        payload.push(data);
      });

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
export const deleteDevice = (device) => {
  const id = device.externalId;

  return (dispatch) => {
    dispatch({ type: DEVICES_REQUEST_STARTED });

    firebase.firestore().collection('devices').doc(id)
    .get()
    .then((document) => {
      return document.ref.delete();
    })
    .then(() => {
      dispatch({ type: DEVICE_DELETE_SUCCESS, device })
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
export const updateDevice = (device) => {
  const id = device.externalId;

  return (dispatch) => {
    dispatch({ type: DEVICES_REQUEST_STARTED });

    firebase.firestore().collection('devices').doc(id)
    .update(device)
    .then(() => {
      dispatch({ type: DEVICE_UPDATE_SUCCESS, device })
    })
    .catch((err) => {
      dispatch({ type: DEVICE_UPDATE_FAILED, err })
    })
    .finally(() => {
      dispatch({ type: DEVICES_REQUEST_END })
      Actions.deviceList();
    })
  }
}

/**
 * Send update request and update store, call toast events
 *
 * @method bookDevice
 * @return {Obejct} the new state
 */
export const bookDevice = (booking) => {
  return (dispatch) => {
    dispatch({ type: DEVICE_BOOKING, booking });
  }
}


/**
 * Send update request and update store, call toast events
 *
 * @method returnDevice
 * @return {Obejct} the new state
 */
export const returnDevice = (booking) => {
  return (dispatch) => {
    dispatch({ type: DEVICE_BOOKING, booking });
  }
}
