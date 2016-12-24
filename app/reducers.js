import { combineReducers } from 'redux';

// Import all individual Reducers
// import login from './containers/Login/reducers';
import counter from './containers/Counter/reducers';

export default combineReducers({
  // login,
  counter
});
