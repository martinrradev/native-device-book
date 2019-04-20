import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, CardSection, Confirm } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteDevice } from '../actions';

class DeviceItemControls extends Component {
  // temporary only for test purpose, later move in to reducer as store flag
  state = { showModal: false };

  /**
   * Send device delete request
   *
   * @method deleteDevice
   * @return {Obejct} TODO: to be updated
   */
  delete(device) {
    console.log('Device ', device.name, ' will be deleted');

    // use connect to inject the store and get access to the store
    this.setState({ showModal: false });
    this.props.deleteDevice(device);
  }

  /**
   * Navigate to edin screen and pass specific device
   *
   * @method editDevice
   */
  editDevice(device) {
    // Actions.employeeEdit({ device });
  }

  /**
   * Send update request and book device
   *
   * @method bookDevice
   * @return {Obejct} TODO: to be updated
   */
  bookDevice(device) {
    // use connect to inject the store and get access to the store
		// this.props.devicesBook(device);
  }

  /**
   * Check if user is auth and show additional controls
   *
   * @method showAdminControls
   * @return {Obejct}
   */
  showAdminControls(user, device) {
    if (user) {
      return (
        <View>
          <CardSection style={styles.CardSectionContainer}>
            <Button style={ styles.test } onPress={() => {}}>Edit Device</Button>
          </CardSection>
          <CardSection style={styles.CardSectionContainer}>
            <Button style={ styles.test } onPress={() => this.setState({ showModal: true })}>Delete Device</Button>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onCancel={() => this.setState({ showModal: false })}
            onConfirm={() => this.delete(device)}
            cancelText='Cancel'>
            Are you sure you want to delete {device.name}?
          </Confirm>
        </View>
      )
    }
  }

  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const user = this.props.user;
    const device = this.props.device;

    return (
      <View>
        {this.showAdminControls(user, device)}
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

const mapStateToProps = state => {
	return { devices: state.devices.list };
};

export default connect(mapStateToProps, { deleteDevice })(DeviceItemControls);
