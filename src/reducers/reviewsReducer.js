export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};
