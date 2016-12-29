import * as types from './constants';

let count = 0;

const counter = (state, action) => {
  switch (action.type) {
    case types.INCREMENT:
      if (state.id !== action.id) return state;
      return { ...state, count: state.count + 1 };
    case types.DECREMENT:
      if (state.id !== action.id) return state;
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const counters = (state = [], action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state.map((c) => counter(c, action));
    case types.DECREMENT:
      return state.map((c) => counter(c, action));
    case types.ADD:
      count += 1;
      return [...state, { id: count, count: 0 }];
    case types.REMOVE:
      return state.filter((c) => c.id !== action.id);
    default:
      return state;
  }
};

export default counters;
