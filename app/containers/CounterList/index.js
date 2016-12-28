import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as actions from './actions';

import Counter from './Counter';

const CounterList = ({
  counters,
  addCounter,
  incrementCounter,
  decrementCounter,
  removeCounter
}) => (
  <ScrollView style={{ flex: 1 }}>
    <TouchableOpacity style={styles.simpleButton} onPress={addCounter} activeOpacity={0.5}>
      <Text style={styles.buttonText}>ADD COUNTER</Text>
    </TouchableOpacity>
    {counters.map((counter) => (
      <Counter
        {...counter}
        key={counter.id}
        onIncrement={() => incrementCounter(counter.id)}
        onDecrement={() => decrementCounter(counter.id)}
        onRemove={() => removeCounter(counter.id)}
      />
    ))}
  </ScrollView>
);

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({ counters: state.counters });

export default connect(mapStateToProps, actions)(CounterList);
