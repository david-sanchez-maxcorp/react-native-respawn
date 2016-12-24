import React, { Component } from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Text, View, StatusBar, ScrollView } from 'react-native';

import styles, { tabBarActiveTextColor, tabBarInactiveTextColor, tabBarBackgroundColor } from './styles';

import Intro from '../Intro';
import Login from '../Login';

function renderTabBar() {
  return <DefaultTabBar tabStyle={styles.tabStyle} />;
}

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.flex}>
        <StatusBar barStyle="light-content" />
        <ScrollableTabView
          initialPage={selectedIndex}
          tabBarActiveTextColor={tabBarActiveTextColor}
          tabBarInactiveTextColor={tabBarInactiveTextColor}
          tabBarBackgroundColor={tabBarBackgroundColor}
          tabBarTextStyle={styles.tabBarTextStyle}
          style={styles.scrollableTabViewStyles}
          tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
          renderTabBar={renderTabBar}
        >
          <View tabLabel="SIGNUP"><Text style={{ color: 'white' }}>My</Text></View>
          <ScrollView tabLabel="STRONGLIFT"><Intro /></ScrollView>
          <View tabLabel="LOGIN"><Login /></View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Landing;
