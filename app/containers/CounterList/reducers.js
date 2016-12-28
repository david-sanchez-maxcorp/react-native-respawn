import * as types from './constants';

let count = 0;

function addToCount(id, number) {
  return (counter) => {
    if (counter.id !== id) return counter;
    return { ...counter, count: counter.count + number };
  };
}

const addCounter = (state) => {
  count += 1;
  return [...state, { id: count, count: 0 }];
};

const removeCounter = (state, id) => state.filter((counter) => counter.id !== id);

const incrementCounter = (state, id) => state.map(addToCount(id, 1));

const decrementCounter = (state, id) => state.map(addToCount(id, -1));

export default (state = [], action) => {
  switch (action.type) {
    case types.INCREMENT:
      return incrementCounter(state, action.id);
    case types.DECREMENT:
      return decrementCounter(state, action.id);
    case types.ADD:
      return addCounter(state);
    case types.REMOVE:
      return removeCounter(state, action.id);
    default:
      return state;
  }
};
