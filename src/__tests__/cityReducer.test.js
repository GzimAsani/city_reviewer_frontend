import cityReducer from '../reducers/cityReducer'

test('Reducer can FETCH_TODOS', () => {
  const action = { type: 'FETCH_REDUCERS' };
  const state = [];
  expect(cityReducer(state, action)).toEqual(
    [],
  );
});