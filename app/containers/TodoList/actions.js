/*
 * TodoList Actions
 *
 * Actions are the only thing that can change state in your application
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as types from './constants';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE_TODO,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
