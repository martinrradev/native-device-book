import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import DeviceList from './src/components/DeviceList';
import AdminPanel from './src/components/AdminPanel';
import DeviceForm from './src/components/DeviceForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, backgroundColor: 'white' }}>
      <Scene key="root">
        <Scene key="main">
          <Scene key="deviceList" component={DeviceList} title="Devices" rightTitle="Login" initial onRight={() => Actions.auth()}></Scene>
        </Scene>
        <Scene key="auth" hide>
          <Scene key="login" component={LoginForm} title="Please login"></Scene>
        </Scene>
        <Scene key="admin" hide>
          <Scene key="adminPanel" component={AdminPanel} title="Devices" rightTitle="Create" onRight={() => Actions.createDevice()}></Scene>
          <Scene key="createDevice" component={DeviceForm} title="Create Device" rightTitle="Create"></Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
