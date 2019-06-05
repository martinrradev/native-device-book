import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Card, CardSection } from './common';
import DeviceItemControls from './DeviceItemControls';

class DeviceItem extends Component {
  // TODO: could be state less component

  /**
   * Return device status based on bookedBy
   *
   * @method deviceStatus
   * @return {Obejct} Status
   */
  deviceStatus() {
    const { bookedBy } = this.props.device;

    if (bookedBy) {
      return <Text style={styles.statusTextRedStyle}>Booked</Text>;
    } else {
      return <Text style={styles.statusTextGreenStyle}>Available</Text>;
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
      <TouchableWithoutFeedback>
          <Card style={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <CardSection style={styles.CardSectionContainer}>
                <Image style={styles.imageStyle} source={{ uri: device.firebaseImgURL }}/>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Text style={styles.headerTextStyle}>{device.name}</Text>
                {this.deviceStatus()}
                <Text>{device.batteryStatus}</Text>
                <Text>{device.os}</Text>
                <Text>{device.bookedBy}</Text>
                <Text>{device.dateofBook}</Text>
              </CardSection>
              <DeviceItemControls device={device} user={user}/>
            </View>
          </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  CardSectionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  statusTextRedStyle: {
    backgroundColor: 'red',
    color: 'white',
    width: 70,
    textAlign: 'center'
  },
  statusTextGreenStyle: {
    backgroundColor: 'green',
    color: 'white',
    width: 70,
    textAlign: 'center'
  },
  imageStyle: {
    height: 200,
    flex: 1
  }
})

export default DeviceItem;
