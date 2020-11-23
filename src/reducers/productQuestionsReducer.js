var productQuesitonsReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
};

export default productQuesitonsReducer;