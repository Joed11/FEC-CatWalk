var relatedProductsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_RELATED_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

export default relatedProductsReducer;