import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    const error = this.props.error;

    if (error) {
      return (
        <View style={styles.errorWrapper}>
            <Text style={styles.errorText}>
              {error.message}
            </Text>
        </View>
      )
    }
  }

  showSpinner() {
    const isLoading = this.props.loading;

    if (isLoading) {
      return <Spinner/>
    } else {
      return <Button onPress={this.onButtonPress.bind(this)} >Login</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@mail.com" onChangeText={this.onEmailChange.bind(this)} value={this.props.email}></Input>
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password}></Input>
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.showSpinner()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorWrapper: {
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
