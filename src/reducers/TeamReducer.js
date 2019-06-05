import {
  TEAMS_REQUEST_STARTED,
  TEAMS_REQUEST_END,
  TEAMS_FETCH_SUCCESS,
  TEAMS_FETCH_FAILED
} from '../actions/types';

const INITIAL_STATE = { list: [], loading: '' };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case TEAMS_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true });
    case TEAMS_REQUEST_END:
      return Object.assign({}, state, { loading: false });
		case TEAMS_FETCH_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
  	case TEAMS_FETCH_FAILED:
      return Object.assign({}, state, INITIAL_STATE); // needs to be updated
		default:
			return state;
	}
};
