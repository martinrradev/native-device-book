
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: null, loading: false };

export default (state = INITIAL_STATE.email, action) => {
  console.log('auth reducer');

  switch (action.type) {
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.payload });
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.payload });
    case LOGIN_USER:
      return Object.assign({}, state, { loading: true, error: '' });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, INITIAL_STATE ,{ user: action.payload });
    case LOGIN_USER_FAIL:
      return Object.assign({}, state, { error: action.payload, loading: false });
    default:
      return state;
  }
}
