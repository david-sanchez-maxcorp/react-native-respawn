import * as types from './constants';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  token: '',
  user: {},
  error: {}
};

export default (state = initialState, { type: actionType, payload = {} }) => {
  switch (actionType) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    case types.LOGIN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user
      });
    case types.LOGIN_REQUEST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: payload
      });
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
