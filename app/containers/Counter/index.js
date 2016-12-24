import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import * as actions from './actions';
import styles from './styles';

const mapStateToProps = (state) => ({ counter: state.counter });
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement())
});

const Counter = ({ counter, onIncrement, onDecrement }) => (
  <View style={[styles.container, styles.layoutColumn, styles.layoutAlignStartStretch]}>
    <Text style={styles.counter}>{counter}</Text>
    <View style={[styles.layoutRow, styles.layoutAlignCenterCenter]}>
      <TouchableOpacity
        onPress={onDecrement}
        style={[styles.flex, styles.layoutAlignCenterCenter, styles.button]}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonLabel}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onIncrement}
        style={[styles.flex, styles.layoutAlignCenterCenter, styles.button]}
        activeOpacity={0.5}
      >
        <Text style={styles.buttonLabel}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
