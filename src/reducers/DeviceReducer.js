import {
  DEVICES_REQUEST_STARTED,
  DEVICES_REQUEST_END,
  DEVICES_FETCH_SUCCESS,
  DEVICES_FETCH_FAILED,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAILED,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAILED
} from '../actions/types';

const INITIAL_STATE = { list: [], loading: '' };

export default (state = INITIAL_STATE, action) => {
  const devices = state.list;

	switch (action.type) {
    case DEVICES_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true });
    case DEVICES_REQUEST_END:
      return Object.assign({}, state, { loading: false });
		case DEVICES_FETCH_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
  	case DEVICES_FETCH_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
    case DEVICE_DELETE_SUCCESS:
      const deletedIndex = devices.findIndex(device => device.externalId === action.device.externalId);

      return Object.assign({}, state, {
            list: [
            ...devices.slice(0, deletedIndex),
            ...devices.slice(deletedIndex + 1)
          ]
        });
    case DEVICE_DELETE_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
    case DEVICE_UPDATE_SUCCESS:
      const updatedDevice = action.device;
      const updatedDeviceExternalId = action.device.externalId;
      const updatedIndex = devices.findIndex(device => device.externalId === updatedDeviceExternalId);

      return Object.assign({}, state, {
        list: [
          ...devices.slice(0, updatedIndex),
          Object.assign({}, devices[updatedIndex], updatedDevice),
          ...devices.slice(updatedIndex + 1)
          ]
      });
    case DEVICE_UPDATE_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
		default:
			return state;
	}
};
