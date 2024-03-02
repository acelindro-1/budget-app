// redux/actions.js
export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction,
  });
  
  export const clearTransactions = () => ({
    type: 'CLEAR_TRANSACTIONS',
  });
  