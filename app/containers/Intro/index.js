import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
class Intro extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Card title="SIMPLICITY IS KEY">
          <Text style={{ marginBottom: 10 }}>
            Our smart and unique logging features will finally let
            you focus on your workout without the hassle
            of reaching for your phone after every set.
          </Text>
          <Button
            icon={{ name: 'keyboard-arrow-right' }}
            iconRight={true}
            backgroundColor="#00BCD4"
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title="GET STARTED"
          />
        </Card>
        <Card title="LEADERBOARD">
          <Text style={{ marginBottom: 10 }}>
            Our smart and unique logging features will finally let
            of reaching for your phone after every set.
          </Text>
        </Card>
        <Card title="ONLINE">
          <Text style={{ marginBottom: 10 }}>
            Our smart and unique logging features will finally let
            you focus on your workout without the hassle
            of reaching for your phone after every set.
          </Text>
        </Card>
        <Card title="CONNECT">
          <Text style={{ marginBottom: 10 }}>
            See who is working out at your location
            location your at out working is who see.
          </Text>
          <Button
            backgroundColor="#00BCD4"
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title="HOW IT WORKS"
          />
        </Card>
        <Card title="SIMPLICITY IS KEY">
          <Text style={{ marginBottom: 10 }}>
            Our smart and unique logging features will finally let
            you focus on your workout without the hassle
            of reaching for your phone after every set.
          </Text>
        </Card>
      </View>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default Intro;
