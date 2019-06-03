import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, CardSection, Confirm } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteDevice, returnDevice } from '../actions';

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
  return(device) {
    // TODO
    console.log('Return device ', device.name);
		// this.props.returnDevice(device);
  }

  /**
   * Navigate to edin screen and pass specific device
   *
   * @param {Object} device
   * @method edit
   */
  edit(device) {
    console.log('Navigate to edit form ', device.name);
    Actions.deviceEditForm({ device });
  }

  /**
   * Show booking controls to the user
   *
   * @param {Object} device
   * @method book
   */
  book(device) {
    console.log('Navigate to booking form ', device.name);
    Actions.deviceBookForm({ device });
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
  showBookingControls(user, device) {
    if (!user) {
      return (
        <View>
          <CardSection style={styles.CardSectionContainer}>
            {device.bookedBy ? (
              <Button onPress={() => this.return(device)}>Return Device</Button>
            ) : (
              <Button onPress={() => this.book(device)}>Book Device</Button>
            )}
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
	return { devices: state.devices.list, booking: state.devices.booking };
};

export default connect(mapStateToProps, { deleteDevice, returnDevice })(DeviceItemControls);
