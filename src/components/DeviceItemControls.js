import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, CardSection, Confirm } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteDevice, updateDevice } from '../actions';

class DeviceItemControls extends Component {
  /**
   * General component constructor
   *
   * @method constructor
   */
  constructor(props) {
    super(props);

    this.state = { showModal: false };
  }

  /**
   * Send device delete request
   *
   * @method deleteDevice
   * @return {Obejct} TODO: to be updated
   */
  delete(device) {
    this.setState({ showModal: false });
    this.props.deleteDevice(device);
  }

  /**
   * Navigate to edin screen and pass specific device
   *
   * @method edit
   */
  edit(device) {
    Actions.deviceForm({ device });
  }

  /**
   * Show booking controls to the user
   *
   * @method book TODO: to be updated
   */
  book(device) {
    // TODO: to be updated
    console.log('book action for ', device.name);
  }

  /**
   * Send update request and book device
   *
   * @method bookDevice
   * @return {Obejct} TODO: to be updated
   */
  bookDevice(device) {
    // TODO: to be updated
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
            <Button style={ styles.test } onPress={() => this.edit(device)}>Edit Device</Button>
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
   * Check if user is auth and show booking controls
   *
   * @method showBookControls
   * @return {Obejct}
   */
  showBookControls(user, device) {
    if (user) {
      return (
        <View>
          <CardSection style={styles.CardSectionContainer}>
            <Button style={ styles.test } onPress={() => this.book(device)}>Book Device</Button>
          </CardSection>
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
        {this.showBookControls(user, device)}
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

export default connect(mapStateToProps, { deleteDevice, updateDevice })(DeviceItemControls);
