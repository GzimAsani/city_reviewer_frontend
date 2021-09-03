export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REVIEW':
      return { ...state, [action.payload.slug]: action.payload };
    default:
      return state;
  }
};