import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeviceReducer from './DeviceReducer';
import TeamReducer from './TeamReducer';

export default combineReducers({
  auth: AuthReducer,
  devices: DeviceReducer,
  teams: TeamReducer
});
