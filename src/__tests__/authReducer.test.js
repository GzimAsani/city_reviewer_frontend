import authReducer from '../reducers/authReducer';

test('Reducer can SIGN_IN', () => {
  const action = { type: 'SIGN_IN' };
  const state = [];
  expect(authReducer(state, action)).toEqual(
    { isSignedIn: true },
  );
});
