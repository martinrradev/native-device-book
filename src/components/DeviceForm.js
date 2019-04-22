import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection, Input } from './common';

class DeviceForm extends Component {
  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const device = this.props.device;

    return (
      <TouchableWithoutFeedback>
        <View style={styles.cardContainer}>
          <Card>
            <CardSection>
              <Image style={styles.imageStyle} source={{ uri: device.firebaseImgURL }}/>
            </CardSection>
            <CardSection>
              <Input label="Manufacturer:" placeholder="Google" onChangeText={() => {}} value={device.manufacturer}></Input>
            </CardSection>
            <CardSection>
              <Input label="Model:" placeholder="Pixel 2" onChangeText={() => {}} value={device.name}></Input>
            </CardSection>
            <CardSection>
              <Input label="OS:" placeholder="Android" onChangeText={() => {}} value={device.os}></Input>
            </CardSection>
            <CardSection>
              <Input label="OS version:" placeholder="Pie 9.0.0" onChangeText={() => {}} value={device.osVersion}></Input>
            </CardSection>
            <CardSection>
              <Input label="Type:" placeholder="phone" onChangeText={() => {}} value={device.type}></Input>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imageStyle: {
    width: '100%',
    height: 300
  }
})

export default DeviceForm;
