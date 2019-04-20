import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

// should be moved in ./assets/login-image.png
const remote = 'https://cdn.stocksnap.io/img-thumbs/960w/BRZWV3H148.jpg';

class LoginForm extends Component {
  /**
   * Trigger store update on email change
   *
   * @method onEmailChange
   */
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  /**
   * Trigger store update on password change
   *
   * @method onPasswordChange
   */
  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  /**
   * Send request for auth with email and passw
   *
   * @method onButtonPress
   */
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  /**
   * Check for store flag 'еrror'
   *
   * @method renderError
   * @return {Obejct}
   */
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

  /**
   * Check for store flag 'loading'
   *
   * @method showSpinner
   * @return {Object} Spinner
   */
  showSpinner() {
    const isLoading = this.props.loading;

    if (isLoading) {
      return <Spinner/>
    } else {
      return <Button onPress={this.onButtonPress.bind(this)} >Login</Button>;
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
      <View style={styles.containerStyle}>
        <View style={styles.imageContainerStyle}>
          <Image style={styles.imageStyle} source={{ uri: remote }} />
        </View>
        <View style={styles.loginContainerStyle}>
         <Card style={styles.cardExtendStyle}>
           <CardSection>
             <Input label="Email:" placeholder="email@mail.com" onChangeText={this.onEmailChange.bind(this)} value={this.props.email}></Input>
           </CardSection>
           <CardSection>
             <Input secureTextEntry label="Password:" placeholder="password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password}></Input>
           </CardSection>
           {this.renderError()}
           <CardSection style={{ borderBottomWidth:0 }}>
             {this.showSpinner()}
           </CardSection>
         </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#eee'
  },
  imageContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  imageStyle: {
    flex: 1
  },
  loginContainerStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  cardExtendStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 2,
    marginLeft: 16,
    marginRight: 16
  },
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
