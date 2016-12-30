import deepFreeze from 'deep-freeze';
import todosReducer from '../reducers';
import * as types from '../constants';

test('ADD_TODO action: adds a todo to a list of todos', () => {
  const stateBefore = {};
  const action = { type: types.ADD_TODO, text: 'Learn Redux' };

  const stateAfter = {
    visibilityFilter: types.SHOW_ALL,
    todos: [{ id: 1, text: 'Learn Redux', completed: false }]
  };

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});

test('TOGGLE_TODO action: toggles the completed property in a todo object', () => {
  const stateBefore = {
    visibilityFilter: types.SHOW_ALL,
    todos: [
      { id: 0, text: 'Learn Redux', completed: false },
      { id: 1, text: 'Go Shopping', completed: false }
    ]
  };
  const action = { type: types.TOGGLE_TODO, id: 1 };

  const stateAfter = {
    visibilityFilter: types.SHOW_ALL,
    todos: [
      { id: 0, text: 'Learn Redux', completed: false },
      { id: 1, text: 'Go Shopping', completed: true }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
  expect(todosReducer(stateAfter, action)).toEqual(stateBefore);
});

test('SET_VISIBILITY_FILTER action: sets the visibility filter property of the state', () => {
  const stateBefore = {
    visibilityFilter: types.SHOW_ALL,
    todos: [
      { id: 0, text: 'Learn Redux', completed: false },
      { id: 1, text: 'Go Shopping', completed: false }
    ]
  };
  const action = { type: types.SET_VISIBILITY_FILTER, filter: types.SHOW_COMPLETED };

  const stateAfter = {
    visibilityFilter: types.SHOW_COMPLETED,
    todos: [
      { id: 0, text: 'Learn Redux', completed: false },
      { id: 1, text: 'Go Shopping', completed: false }
    ]
  };

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});
