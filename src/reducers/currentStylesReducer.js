var currentStylesReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_ALL_STYLES':
      return action.payload;
    default:
      return state;
  }
};

export default currentStylesReducer;