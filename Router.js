import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import DeviceList from './src/components/DeviceList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, backgroundColor: 'white' }}>
      <Scene key="root">
        <Scene key="auth" hide>
          <Scene key="login" component={LoginForm} title="Please login" initial></Scene>
        </Scene>
        <Scene key="main">
          <Scene key="deviceList" component={DeviceList} title="Employees" rightTitle="Login" onRight={() => { console.log('Right navigation for login') }}></Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
