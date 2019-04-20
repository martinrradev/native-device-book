import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Button  } from './common';

class DeviceForm extends Component {
  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    return (
      <View style={styles.cardContainer}>
        <Text>Device Form</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  }
})

export default DeviceForm;
