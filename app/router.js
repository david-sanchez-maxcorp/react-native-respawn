import React, { Component } from 'react';
import { Scene, Router as RouterFlux } from 'react-native-router-flux';

import TodoList from './containers/TodoList';

const getSceneStyle = (props, computedProps) => {
  const style = { flex: 1 };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  style.marginTop += 20;
  return style;
};

/* eslint-disable react/prefer-stateless-function */
class Router extends Component {
  render() {
    return (
      <RouterFlux sceneStyle={{ backgroundColor: '#FFFFFF' }} getSceneStyle={getSceneStyle} hideTabBar={true} hideNavBar={true}>
        <Scene key="root">
          <Scene key="TodoList" component={TodoList} />
        </Scene>
      </RouterFlux>
    );
  }
}
/* eslint-disable react/prefer-stateless-function */

export default Router;
