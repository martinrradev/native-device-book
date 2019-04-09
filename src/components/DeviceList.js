import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { devicesFetch } from '../actions';
import DeviceItem from './DeviceItem';
import { Spinner } from './common';

class DeviceList extends Component {
	componentWillMount() {
		this.props.devicesFetch();
  }

	keyExtractor(device) {
		return device.id;
  }

  showSpinner() {
    const isloading = this.props.isLoading;

    if (isloading) {
      return <Spinner/>
    }
  }

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
  const devices = _.map(state.devices.list, (val, uid) => {
		return { ...val, uid };
	});

	return { devices, isLoading: state.devices.loading };
};

export default connect(mapStateToProps, { devicesFetch })(DeviceList);
