import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import RouterContainer from './router';
import reduxStore from './store';


const applicationStyles = { flex: 1 };

/* eslint-disable react/prefer-stateless-function */
class Root extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <View style={applicationStyles}>
          <StatusBar />
          <RouterContainer />
        </View>
      </Provider>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default Root;
