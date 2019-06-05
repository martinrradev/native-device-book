import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback, Picker, ScrollView } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { updateDevice, teamsFetch } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class DeviceForm extends Component {
  /**
   * General component constructor
   *
   * @method constructor
   */
  constructor(props) {
    super(props);

    this.state = { team: null, member: null };
  }

  /**
   * componentDidMount lifecycle hook
   *
   * @method componentDidMount
   */
	componentDidMount() {
    const isBooking = this.props.isBooking;

    if (isBooking) {
      this.props.teamsFetch();
    }
  }

  /**
   * Send update device and send request
   *
   * @method returnDevice
   * @return {Obejct}
   */
  bookDevice(device) {
    device.bookedBy = this.state.member;
    device.dateOfBook = new Date();

		this.props.updateDevice(device);
  }

  /**
   * Show editing controls to the user
   *
   * @param {Object} device
   * @method editDevice
   */
  editDevice(device) {
    console.log('Edit', device);
  }

  /**
   * Check for store flag 'isLoading'
   *
   * @method showSpinner
   * @return {Object} Spinner
   */
  showSpinner(device, isBooking) {
    const isLoading = this.props.isLoading;

    if (isLoading) {
      return <Spinner/>
    } else {
      return this.loadDeviceForm(device, isBooking);
    }
  }

  /**
   * Check for store flag 'isLoading'
   *
   * @method bookDeviceBtnStatus
   * @default false
   * @return {Object} Button
   */
  bookDeviceBtn(device) {
    debugger;
    if (this.state.team && this.state.member) {
      return (
        <CardSection style={styles.CardSectionContainer}>
          <Button style={ styles.test } onPress={() => this.bookDevice(device)}>Book Device</Button>
        </CardSection>
      )
    }

    return false;
  }

  /**
   * Check if device is booked and show relevant button
   *
   * @method loadDeviceForm
   * @return {Obejct}
   */
  loadDeviceForm(device, isBooking) {
    const {
      firebaseImgURL,
      manufacturer,
      osVersion,
      name,
      os,
      type
    } = device;

    if (isBooking) {
      return (
        <ScrollView>
          <Card style={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <CardSection style={styles.CardSectionContainer}>
                <Image style={styles.imageStyle} source={{ uri: firebaseImgURL }}/>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Text style={styles.headerTextStyle}>{manufacturer}</Text>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Text style={styles.headerTextStyle}>{name}</Text>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Picker
                  selectedValue={this.state.team}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ team: itemValue })
                  }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="ELFS" value="ELFS" />
                </Picker>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Picker
                  selectedValue={this.state.member}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ member: itemValue })
                  }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Martin Radev" value="Martin Radev" />
                  <Picker.Item label="Martin Petrov" value="Martin Petrov" />
                </Picker>
              </CardSection>
              {this.bookDeviceBtn(device)}
            </View>
          </Card>
        </ScrollView>
        )
    } else {
      return (
        <Card>
          <CardSection>
            <Image style={styles.imageStyle} source={{ uri: firebaseImgURL }}/>
          </CardSection>
          <CardSection>
            <Input label="Manufacturer:" placeholder="Google" onChangeText={() => {}} value={manufacturer}></Input>
          </CardSection>
          <CardSection>
            <Input label="Model:" placeholder="Pixel 2" onChangeText={() => {}} value={name}></Input>
          </CardSection>
          <CardSection>
            <Input label="OS:" placeholder="Android" onChangeText={() => {}} value={os}></Input>
          </CardSection>
          <CardSection>
            <Input label="OS version:" placeholder="Pie 9.0.0" onChangeText={() => {}} value={osVersion}></Input>
          </CardSection>
          <CardSection>
            <Input label="Type:" placeholder="phone" onChangeText={() => {}} value={type}></Input>
          </CardSection>
        </Card>
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
    const device = this.props.device;
    const isBooking = this.props.isBooking;

    return (
      <TouchableWithoutFeedback>
        {this.showSpinner(device, isBooking)}
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  CardSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTextStyle: {
    fontSize: 18
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: '100%',
    height: 300
  }
})

const mapStateToProps = state => {
  console.log(state);
  const teams = _.map(state.teams.list, (val, id) => {
		return { ...val, id };
	});

	return { teams, isLoading: state.teams.loading };
};

export default connect(mapStateToProps, { teamsFetch, updateDevice })(DeviceForm);
