import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeviceReducer from './DeviceReducer';

export default combineReducers({
  auth: AuthReducer,
  devices: DeviceReducer
});
