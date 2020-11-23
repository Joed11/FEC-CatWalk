var questionsAmountReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_QUESTIONS_AMOUNT':
      return action.payload;
    default:
      return state;
  }
};

export default questionsAmountReducer;