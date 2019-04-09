import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Button  } from './common';

class DeviceControl extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Text>Device Control</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  }
})

export default DeviceControl;
