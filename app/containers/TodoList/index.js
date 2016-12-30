import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import * as actions from './actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from './constants';

import TodoInputForm from './components/TodoInputForm';
import TodoListBody from './components/TodoListBody';
import TodoListFooter from './components/TodoListFooter';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_INCOMPLETE:
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

const TodoList = ({
  todos,
  visibilityFilter,
  addTodo,
  toggleTodo,
  setVisibilityFilter
}) => (
  <View style={styles.todoListContainer}>
    <TodoInputForm onSubmit={addTodo} />
    <View style={styles.bodyAndFooterWrapper}>
      <ScrollView>
        <TodoListBody todos={getVisibleTodos(todos, visibilityFilter)} onTodoPress={toggleTodo} />
      </ScrollView>
      <TodoListFooter onFilterPress={setVisibilityFilter} visibilityFilter={visibilityFilter} />
    </View>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todoList.todos,
  visibilityFilter: state.todoList.visibilityFilter
});

export default connect(mapStateToProps, actions)(TodoList);
