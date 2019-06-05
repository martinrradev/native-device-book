import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { devicesFetch } from '../actions';
import DeviceItem from './DeviceItem';
import { Spinner } from './common';
import _ from 'lodash';

class DeviceList extends Component {
  /**
   * componentWillMount lifecycle hook
   *
   * @method componentWillMount
   */
	componentWillMount() {
		this.props.devicesFetch();
  }

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
   * Check for store flag 'isLoading'
   *
   * @method showSpinner
   * @return {Object} Spinner
   */
  showSpinner() {
    const isLoading = this.props.isLoading;

    if (isLoading) {
      return <Spinner/>
    }
  }

  /**
   * render lifecycle hook
   *
   * @method render
   * @return {Object}
   */
  render() {
		return (
      <View>
        {this.showSpinner()}

        <FlatList
          data={this.props.devices}
          keyExtractor={this.keyExtractor}
          horizontal={false}
          numColumns={2}
          renderItem={({item}) => <DeviceItem device={item} />}
        />
      </View>
		);
	}
}

const mapStateToProps = state => {
  const devices = _.map(state.devices.list, (val, id) => {
		return { ...val, id };
	});

	return { devices, isLoading: state.devices.loading };
};

export default connect(mapStateToProps, { devicesFetch })(DeviceList);
