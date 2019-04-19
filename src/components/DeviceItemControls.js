import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class DeviceItemControls extends Component {
  deleteDevice(device) {
    // use connect to inject the store and get access to the store
		// this.props.devicesDelete(device);
  }

  editDevice(device) {
    // Actions.employeeEdit({ device });
  }

  bookDevice(device) {
    // use connect to inject the store and get access to the store
		// this.props.devicesBook(device);
  }

  showAdminControls(user) {
    if (user) {
      return (
        <View>
          <CardSection style={styles.CardSectionContainer}>
            <Button style={ styles.test } onPress={() => {}}>Edit Device</Button>
          </CardSection>
          <CardSection style={styles.CardSectionContainer}>
            <Button style={ styles.test } onPress={() => {}}>Delete Device</Button>
          </CardSection>
        </View>
      )
    }
  }

  render() {
    const user = this.props.user;
    // const device = this.props.device;

    return (
      <View>
        {this.showAdminControls(user)}
        <CardSection style={styles.CardSectionContainer}>
          <Button style={ styles.test } onPress={() => {}}>Book Device</Button>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  }
})

export default DeviceItemControls;
