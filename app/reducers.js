import { combineReducers } from 'redux';

// Import all individual Reducers
// import login from './containers/Login/reducers';
import counters from './containers/CounterList/reducers';

export default combineReducers({
  // login,
  counters
});
