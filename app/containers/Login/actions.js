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

import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  LOGOUT
} from './constants';

export function loginRequest(username, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username,
      password
    }
  };
}

export function loginSuccess({ token, user }) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: {
      token,
      user
    }
  };
}

export function loginError(error) {
  return {
    type: LOGIN_REQUEST_ERROR,
    payload: new Error(error),
    error: true
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
