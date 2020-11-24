var questionsSearchbarInputReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_QUERY':
      return action.payload;
    default:
      return state;
  }
};

export default questionsSearchbarInputReducer;