// reducers.js
import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export default rootReducer;
