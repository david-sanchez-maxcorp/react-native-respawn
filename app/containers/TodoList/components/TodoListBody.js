import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import styles from '../styles';

const TodoListBody = ({ todos, onTodoPress }) => {
  if (!todos || !todos.length) {
    return (
      <View style={styles.emptyTodoListView}>
        <Text style={styles.emptyTodoListText}>NO TODOS TO DISPLAY</Text>
      </View>
    );
  }

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          title={todo.text}
          onPress={() => onTodoPress(todo.id)}
          titleStyle={todo.completed ? styles.todoCompleted : {}}
          hideChevron
        />
      ))}
    </List>
  );
};

TodoListBody.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoPress: PropTypes.func.isRequired
};

export default TodoListBody;
