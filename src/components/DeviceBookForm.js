import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Button, CardSection, Card } from './common';
import { connect } from 'react-redux';
import { deleteDevice, updateDevice, bookDevice } from '../actions';

class DeviceBookForm extends Component {
  /**
   * General component constructor
   *
   * @method constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * Show booking controls to the user
   *
   * @param {Object} device
   * @method book
   */
  book(device) {
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
      <View>
        <Card style={styles.cardContainer}>
          <CardSection>
            <Image style={styles.imageStyle} source={{ uri: device.firebaseImgURL }}/>
          </CardSection>
          <CardSection>
            <Text style={styles.textStyle}>{device.manufacturer} / {device.name}</Text>
          </CardSection>
        </Card>
        <Card>

        </Card>
        <Card>
          <CardSection style={styles.CardSectionContainer}>
            <Button onPress={() => this.book(device)}>Book</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  imageStyle: {
    width: '100%',
    height: 300
  },
  textStyle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20
  }
})

const mapStateToProps = state => {
	return { devices: state.devices.list, booking: state.devices.booking };
};

export default connect(mapStateToProps, { deleteDevice, updateDevice, bookDevice })(DeviceBookForm);
