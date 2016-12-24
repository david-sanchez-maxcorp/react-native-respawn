import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../_shared/styles/flexbox';

/* eslint-disable react/prefer-stateless-function */
class Register extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
        <Text onPress={Actions.login}>This is the Register</Text>
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default Register;
