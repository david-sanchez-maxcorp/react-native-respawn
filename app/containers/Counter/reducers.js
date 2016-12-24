import * as types from './constants';

export default (state = 0, { type: actionType }) => {
  switch (actionType) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
