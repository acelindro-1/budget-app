// transactionReducer.js
const initialState = [];

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];
    case 'CLEAR_TRANSACTIONS':
      return [];
    default:
      return state;
  }
};

export default transactionReducer;
