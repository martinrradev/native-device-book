import {
	DEVICES_FETCH_STARTED, DEVICES_FETCH_SUCCESS, DEVICES_FETCH_FAILED, DEVICES_FETCH_END
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
		default:
			return state;
	}
};
