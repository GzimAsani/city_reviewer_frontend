import reviewReducer from '../reducers/reviewReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_REDUCERS' };
  const state = [];
  expect(reviewReducer(state, action)).toEqual(
    [],
  );
});
