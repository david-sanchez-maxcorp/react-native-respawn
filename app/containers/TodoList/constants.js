/*
 * TodoList Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'YourComponent/' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_TODO = 'TodoList/ADD_TODO';
export const REMOVE_TODO = 'TodoList/REMOVE_TODO';
export const TOGGLE_TODO = 'TodoList/TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'TodoList/SET_VISIBILITY_FILTER';

export const SHOW_ALL = 'TodoList/SHOW_ALL';
export const SHOW_COMPLETED = 'TodoList/SHOW_COMPLETED';
export const SHOW_INCOMPLETE = 'TodoList/SHOW_INCOMPLETE';
