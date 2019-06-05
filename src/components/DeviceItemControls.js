import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import _ from 'lodash';
import { Button, CardSection, Confirm, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { updateDevice, deleteDevice } from '../actions';

class DeviceItemControls extends Component {
  /**
   * General component constructor
   *
   * @method constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  /**
   * Send device delete request
   *
   * @param {Object} device
   * @method delete
   */
  delete(device) {
    console.log('Delete device ', device.name);
    this.setState({ showModal: false });
    this.props.deleteDevice(device);
  }

  /**
   * Send update request and return device
   *
   * @param {Object} device
   * @method return
   */
  edit(device) {
    Actions.deviceFormAdmin({ device , isBooking: false });
  }

  /**
   * Navigate to edin screen and pass specific device
   *
   * @method book
   */
  book(device) {
    console.log('book', device);
    Actions.deviceFormMain({ device, isBooking: true });
  }

  /**
   * Send update device and send request
   *
   * @method returnDevice
   * @return {Obejct}
   */
  returnDevice(device) {
    device.bookedBy = '';
    device.dateOfBook = '';

		this.props.updateDevice(device);
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
            <Button onPress={() => this.edit(device)}>Edit Device</Button>
          </CardSection>
          <CardSection style={styles.CardSectionContainer}>
            <Button onPress={() => this.setState({ showModal: true })}>Delete Device</Button>
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
   * @method showBookingControls
   * @return {Obejct}
   */
  showBookControls(user, device) {
    if (!user) {
      return (
        <View>
          {this.switchBookingControls(device)}
        </View>
      )
    }
  }

  /**
   * Check if device is booked and show relevant button
   *
   * @method switchBookingControls
   * @return {Obejct}
   */
  switchBookingControls(device) {
    if (device && device.bookedBy) {
      return (
        <CardSection style={styles.CardSectionContainer}>
          <Button style={ styles.test } onPress={() => this.returnDevice(device)}>Return Device</Button>
        </CardSection>
        )
    } else {
      return (
        <CardSection style={styles.CardSectionContainer}>
          <Button style={ styles.test } onPress={() => this.book(device)}>Book Device</Button>
        </CardSection>
       )
    }
  }

  /**
   * Check for store flag 'isLoading'
   *
   * @method showSpinner
   * @return {Object} Spinner
   */
  showSpinner() {
    const isloading = this.props.isLoading;

    if (isloading) {
      return <Spinner/>
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
        {this.showSpinner()}

        {this.showAdminControls(user, device)}
        {this.showBookingControls(user, device)}
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
	return { state };
};

export default connect(mapStateToProps, { updateDevice, deleteDevice })(DeviceItemControls);
