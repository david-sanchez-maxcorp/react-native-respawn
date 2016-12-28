import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Counter = ({ count, onIncrement, onDecrement, onRemove }) => (
  <View style={styles.counterContainer}>
    <Text style={styles.counterText}>{count}</Text>
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={onDecrement} activeOpacity={0.5}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onIncrement} activeOpacity={0.5}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.simpleButton} onPress={onRemove} activeOpacity={0.5}>
      <Text style={styles.buttonText}>Remove Counter</Text>
    </TouchableOpacity>
  </View>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Counter;
