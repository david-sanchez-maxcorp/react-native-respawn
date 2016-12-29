import deepFreeze from 'deep-freeze';
import todosReducer from '../reducers';
import * as types from '../constants';

test('ADD action: adds a counter to a list of counters', () => {
  const stateBefore = [];
  const action = { type: types.ADD };

  const stateAfter = [{ id: 1, count: 0 }];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});

test('REMOVE action: removes a counter from a list of counters', () => {
  const stateBefore = [
    { id: 1, count: 9 },
    { id: 2, count: 5 },
    { id: 3, count: 2 }
  ];
  const action = { type: types.REMOVE, id: 2 };

  const stateAfter = [
    { id: 1, count: 9 },
    { id: 3, count: 2 }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});

test('INCREMENT action: increments the count property of a counter', () => {
  const stateBefore = [
    { id: 1, count: 9 },
    { id: 2, count: 5 },
    { id: 3, count: 2 }
  ];
  const action = { type: types.INCREMENT, id: 2 };

  const stateAfter = [
    { id: 1, count: 9 },
    { id: 2, count: 6 },
    { id: 3, count: 2 }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});

test('DECREMENT action: decrements the count property of a counter', () => {
  const stateBefore = [
    { id: 1, count: 9 },
    { id: 2, count: 5 },
    { id: 3, count: 2 }
  ];
  const action = { type: types.DECREMENT, id: 1 };

  const stateAfter = [
    { id: 1, count: 8 },
    { id: 2, count: 5 },
    { id: 3, count: 2 }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
});
