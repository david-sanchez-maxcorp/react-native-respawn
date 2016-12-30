import deepFreeze from 'deep-freeze';
import { getVisibleTodos } from '../index';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from '../constants';

test('getVisibleTodos: filters list of todos', () => {
  const todos = [
    { id: 0, text: 'Learn Redux', completed: false },
    { id: 1, text: 'Go Shopping', completed: true },
    { id: 2, text: 'Finish Math Homework', completed: true }
  ];

  const allTodos = [
    { id: 0, text: 'Learn Redux', completed: false },
    { id: 1, text: 'Go Shopping', completed: true },
    { id: 2, text: 'Finish Math Homework', completed: true }
  ];

  const completedTodos = [
    { id: 1, text: 'Go Shopping', completed: true },
    { id: 2, text: 'Finish Math Homework', completed: true }
  ];

  const incompleteTodos = [
    { id: 0, text: 'Learn Redux', completed: false }
  ];

  deepFreeze(todos);
  deepFreeze(allTodos);
  deepFreeze(completedTodos);
  deepFreeze(incompleteTodos);

  expect(getVisibleTodos(todos, SHOW_ALL)).toEqual(allTodos);
  expect(getVisibleTodos(todos, SHOW_COMPLETED)).toEqual(completedTodos);
  expect(getVisibleTodos(todos, SHOW_INCOMPLETE)).toEqual(incompleteTodos);
});
