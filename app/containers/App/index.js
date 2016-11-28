import React, { Component } from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import {
  Button
} from 'react-native-elements';

const styles = StyleSheet.create({
  layoutColumn: {
    flexDirection: 'column'
  },
  layoutRow: {
    flexDirection: 'row'
  },
  layoutAlignStartStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  layoutAlignStartCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  layoutAlignStartEnd: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  layoutAlignStartStretch: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  layoutAlignCenterStart: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  layoutAlignCenterCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  layoutAlignCenterEnd: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  layoutAlignCenterStretch: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  layoutAlignEndStart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  layoutAlignEndCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  layoutAlignEndEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  layoutAlignEndStretch: {
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  layoutAlignSpaceAroundStart: {
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  layoutAlignSpaceAroundCenter: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  layoutAlignSpaceAroundEnd: {
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  layoutAlignSpaceAroundStretch: {
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  layoutAlignSpaceBetweenStart: {
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  layoutAlignSpaceBetweenCenter: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  layoutAlignSpaceBetweenEnd: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  layoutAlignSpaceBetweenStretch: {
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  logoText: {
    fontSize: 25,
    color: '#E53935',
    textAlign: 'center',
    fontWeight: '600'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  flex: {
    flex: 1
  },
  header: {
    paddingTop: 20,
    backgroundColor: '#000000'
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
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
        <StatusBar barStyle="light-content"/>
        <ScrollableTabView
          initialPage={1}
          tabBarActiveTextColor="#E53935"
          tabBarInactiveTextColor="#FFFFFF"
          tabBarBackgroundColor="#212121"
          tabBarTextStyle={{fontSize: 15}}
          style={{backgroundColor: "#000000"}}
          tabBarUnderlineStyle={{height: 2, backgroundColor : "#E53935"}}
          renderTabBar={() => <DefaultTabBar tabStyle={{paddingBottom: 0, marginTop:20}}/>}
        >
          <View tabLabel='SIGNUP'><Text style={{color: "white"}}>My</Text></View>
          <ScrollView tabLabel='COMPANY'><Text style={{color: "white"}}>demo</Text></ScrollView>
          <View tabLabel='LOGIN'><Text style={{color: "white"}}>login</Text></View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default App;
