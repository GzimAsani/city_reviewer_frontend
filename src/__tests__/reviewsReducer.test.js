import reviewsReducer from '../reducers/reviewsReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_REDUCERS' };
  const state = [];
  expect(reviewsReducer(state, action)).toEqual(
    [],
  );
});
