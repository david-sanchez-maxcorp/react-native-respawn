import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from '../constants';
import styles from '../styles';

const checkActive = (visibilityFilter, filter) => {
  return visibilityFilter === filter ? styles.todoListFilterTextActive : {};
};

const TodoListFooter = ({ visibilityFilter, onFilterPress }) => (
  <View style={styles.todoListFooter}>
    <Text
      style={[styles.todoListFilterText, checkActive(visibilityFilter, SHOW_ALL)]}
      onPress={() => onFilterPress(SHOW_ALL)}
    >ALL</Text>
    <Text
      style={[styles.todoListFilterText, checkActive(visibilityFilter, SHOW_COMPLETED)]}
      onPress={() => onFilterPress(SHOW_COMPLETED)}
    >COMPLETED</Text>
    <Text
      style={[styles.todoListFilterText, checkActive(visibilityFilter, SHOW_INCOMPLETE)]}
      onPress={() => onFilterPress(SHOW_INCOMPLETE)}
    >INCOMPLETE</Text>
  </View>
);

TodoListFooter.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onFilterPress: PropTypes.func.isRequired
};

export default TodoListFooter;
