import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Card, CardSection } from './common';
import DeviceItemControls from './DeviceItemControls';

class DeviceItem extends Component {
  // could be state less component

  /**
   * Return device status based on bookedBy
   *
   * @method deviceStatus
   * @return {Obejct} Status
   */
  deviceStatus() {
    const { bookedBy } = this.props.device;

    if (bookedBy) {
      return <Text>Booked</Text>;
    } else {
      return <Text>Available</Text>;
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
    const {
      batteryStatus,
      bookedBy,
      dateofBook,
      firebaseImgURL,
      name,
      os,
    } = this.props.device;

    return (
      <TouchableWithoutFeedback>
          <Card style={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <CardSection style={styles.CardSectionContainer}>
                <Image style={styles.imageStyle} source={{ uri: firebaseImgURL }}/>
              </CardSection>
              <CardSection style={styles.CardSectionContainer}>
                <Text style={styles.headerTextStyle}>{name}</Text>
                {this.deviceStatus()}
                <Text>{batteryStatus}</Text>
                <Text>{os}</Text>
                <Text>{bookedBy}</Text>
                <Text>{dateofBook}</Text>
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
  imageStyle: {
    height: 200,
    flex: 1
  }
})

export default DeviceItem;
