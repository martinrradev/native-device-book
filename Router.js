import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import DeviceList from './src/components/DeviceList';
import AdminPanel from './src/components/AdminPanel';
import DeviceEditForm from './src/components/DeviceEditForm';
import DeviceBookForm from './src/components/DeviceBookForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, backgroundColor: 'white' }}>
      <Scene key="root">
        <Scene key="main">
          <Scene key="deviceList" component={DeviceList} title="Devices" rightTitle="Login" initial onRight={() => Actions.auth()}></Scene>
          <Scene key="deviceBookForm" component={DeviceBookForm} title="Book Device"></Scene>
        </Scene>
        <Scene key="auth" hide>
          <Scene key="login" component={LoginForm} title="Please login"></Scene>
        </Scene>
        <Scene key="admin" hide>
          <Scene key="adminPanel" component={AdminPanel} title="Devices" rightTitle="Create" onRight={() => alert('Create form is still in progrees.')}></Scene>
          <Scene key="deviceEditForm" component={DeviceEditForm} title="Edit Device"></Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
