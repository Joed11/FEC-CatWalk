var currentImageReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_IMAGE':
      return action.payload;
    default:
      return state;
  }
};

export default currentImageReducer;