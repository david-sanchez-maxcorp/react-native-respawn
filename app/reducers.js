import { combineReducers } from 'redux';

// Import all individual Reducers
// import login from './containers/Login/reducers';
import counterList from './containers/CounterList/reducers';
import todoList from './containers/TodoList/reducers';

export default combineReducers({
  counterList,
  todoList
});
