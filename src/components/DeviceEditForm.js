import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class DeviceEditForm extends Component {
  /**
   * Show booking controls to the user
   *
   * @param {Object} device
   * @method edit
   */
  edit(device) {
    console.log('Book', device);
  }

  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const device = this.props.device;

    return (
      <ScrollView>
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
            <CardSection style={styles.CardSectionContainer}>
              <Button onPress={() => this.edit(device)}>Edit</Button>
            </CardSection>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

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

export default DeviceEditForm;
