import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch
} from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class Login extends Component {
  constructor() {
    super();
    this.state = {
      rememberUsername: true
    };

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch(value) {
    this.setState({ rememberUsername: value });
  }
  render() {
    return (
      <View style={[styles.flex, styles.layoutColumn, styles.layoutAlignSpaceBetweenStretch]}>
        <View style={styles.formWrapper}>
          <View style={[styles.controlsWrapper, styles.layoutColumn]}>
            <View style={[styles.layoutRow, styles.inputWrap]}>
              <TextInput
                placeholder="Username"
                style={[styles.flex, styles.input]}
              />
            </View>
            <View style={[styles.layoutRow, styles.inputWrap, styles.inputPasswordWrap]}>
              <TextInput
                placeholder="Password"
                style={[styles.flex, styles.input]}
                secureTextEntry
              />
            </View>
            <View
              style={
                [styles.rememberWrapper, styles.layoutRow, styles.layoutAlignSpaceBetweenStretch]
              }
            >
              <View style={styles.layoutAlignCenterStretch}>
                <Text style={styles.rememberUsernameText}>Remember Username</Text>
              </View>
              <View style={styles.layoutAlignCenterStretch}>
                <Switch
                  onValueChange={this.toggleSwitch}
                  value={this.state.rememberUsername}
                />
              </View>

            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={[styles.button, styles.layoutAlignCenterCenter]}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.layoutRow, styles.layoutAlignCenterCenter]}>
            <Text style={styles.forgotPasswordText}>Forgot your login details?</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <View>
                <Text style={styles.forgotPasswordLinkText}>Get help signing in.</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.layoutRow, styles.layoutAlignCenterCenter, styles.accountWrapper]}>
          <Text style={styles.forgotPasswordText}>Don{"'"} have an account?</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <View>
              <Text style={styles.forgotPasswordLinkText}>Sign up.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default connect()(Login);
