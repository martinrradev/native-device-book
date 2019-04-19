import {
  DEVICES_FETCH_STARTED,
  DEVICES_FETCH_END,
  DEVICES_FETCH_SUCCESS,
  DEVICES_FETCH_FAILED,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAILED,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAILED
} from '../actions/types';

const INITIAL_STATE = { list: [], loading: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case DEVICES_FETCH_STARTED:
      return Object.assign({}, state, { loading: true });
    case DEVICES_FETCH_END:
      return Object.assign({}, state, { loading: false });
		case DEVICES_FETCH_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
  	case DEVICES_FETCH_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
    case DEVICE_DELETE_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
    case DEVICE_DELETE_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
    case DEVICE_UPDATE_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
    case DEVICE_UPDATE_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
		default:
			return state;
	}
};
