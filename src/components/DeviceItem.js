import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button  } from './common';
class DeviceItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ device: this.props.device });
  }

  deviceStatus() {
    const { bookedBy } = this.props.device;
    if (bookedBy) {
      return <Text>Booked</Text>;
    } else {
      return <Text>Available</Text>;
    }
  }

  render() {
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
              <CardSection style={styles.CardSectionContainer}>
                <Button style={ styles.test } onPress={() => {}}>Book Device</Button>
              </CardSection>
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
  },
  test: {
    alignSelf: 'auto',
    margin: 0,
    padding: 0
  }
})

export default DeviceItem;
