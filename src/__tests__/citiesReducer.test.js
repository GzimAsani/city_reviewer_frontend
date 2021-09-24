import citiesReducer from '../reducers/citiesReducer';

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_REDUCERS' };
  const state = [];
  expect(citiesReducer(state, action)).toEqual(
    undefined,
  );
});
