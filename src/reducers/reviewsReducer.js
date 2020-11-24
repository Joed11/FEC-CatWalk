var reviewsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_PRIMARY_PRODUCT_METADATA':
      return action.payload;
    default:
      return state;
  }
};

export default reviewsReducer;