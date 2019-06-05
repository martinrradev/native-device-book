import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import DeviceItem from './DeviceItem';

class AdminPanel extends Component {
  /**
   * Accept object and return object id
   *
   * @method keyExtractor
   * @return {Integer} id
   */
	keyExtractor(device) {
		return device.id;
  }

  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
    const devices = this.props.devices;
    const user = this.props.user;

		return (
      <View>
        <FlatList
          data={devices}
          keyExtractor={this.keyExtractor}
          horizontal={false}
          numColumns={2}
          renderItem={({item}) => <DeviceItem device={item} user={user}/>}
        />
      </View>
		);
	}
}

const mapStateToProps = state => {
	return { devices: state.devices.list, user: state.auth.user.user };
};


export default connect(mapStateToProps)(AdminPanel);
