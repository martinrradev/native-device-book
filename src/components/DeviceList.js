import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { devicesFetch } from '../actions';
import DeviceItem from './DeviceItem';

class DeviceList extends Component {
	componentWillMount() {
		this.props.devicesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		// nextProps are the next set of props that this component will be rendered with
		// this.props is still the old set of props
		this.createDataSource(nextProps);
	}

	createDataSource({ devices }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(devices);
	}

	renderRow(device) {
		return <DeviceItem device={device} />;
	}

  render() {
		return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => {
  const devices = _.map(state.devices, (val, uid) => {
		return { ...val, uid };
	});

	return { devices };
};

export default connect(mapStateToProps, { devicesFetch })(DeviceList);
