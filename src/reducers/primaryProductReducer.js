var primaryProductReducer = (state=null, action) => {
  switch (action.type) {
    case 'CHANGE_PRIMARY_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default primaryProductReducer;