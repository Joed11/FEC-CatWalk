var sortingMethodReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_SORTING_METHOD':
      return action.payload;
    default:
      return state;
  }
};

export default sortingMethodReducer;