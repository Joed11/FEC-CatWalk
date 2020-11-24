var currentImagesReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_IMAGES':
      return action.payload;
    default:
      return state;
  }
};

export default currentImagesReducer;