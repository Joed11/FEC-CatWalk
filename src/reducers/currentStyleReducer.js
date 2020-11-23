var currentStyleReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_STYLE':
      return action.payload;
    default:
      return state;
  }
};

export default currentStyleReducer;