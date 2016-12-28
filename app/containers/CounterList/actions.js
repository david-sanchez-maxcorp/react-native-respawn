/*
 * App Actions
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

export function incrementCounter(id) {
  return {
    type: types.INCREMENT,
    id
  };
}

export function decrementCounter(id) {
  return {
    type: types.DECREMENT,
    id
  };
}

export function addCounter() {
  return {
    type: types.ADD
  };
}

export function removeCounter(id) {
  return {
    type: types.REMOVE,
    id
  };
}
