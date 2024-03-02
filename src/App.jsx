import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, clearTransactions } from './redux/actions';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';

function App() {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions);
  
  // Load transactions from local storage on component mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) {
      dispatch({ type: 'SET_TRANSACTIONS', payload: savedTransactions });
    }
  }, [dispatch]);

  const addTransactionHandler = (newTransaction) => {
    dispatch(addTransaction(newTransaction));
    // Save transactions to local storage after adding a new transaction
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };

  const clearTransactionsHandler = () => {
    dispatch(clearTransactions());
    // Clear transactions from local storage after clearing them from state
    localStorage.removeItem('transactions');
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.amount >= 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  
  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalBalance = totalIncome + totalExpenses;

  const handleLogout = () => {
    alert('Logout Successful');
  };

  return (
    <div className="relative min-h-screen bg-blue-200 flex flex-col justify-center items-center">
      <Link 
        to="/" // Link to the login page
        onClick={handleLogout} // Call the handleLogout function when clicked
        className="absolute top-0 right-0 mt-4 mr-4 bg-black hover:bg-gray-800 text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded-lg sm:mt-6 sm:mr-6"
      >
        Logout
      </Link>
      <div className="flex flex-col items-center border border-black rounded-lg p-4">
        <div className='text-3xl font-bold mb-10'>
          <Header />
        </div>
        <div className='mb-10'> 
          <Balance totalBalance={totalBalance} />
          <IncomeExpenses totalIncome={totalIncome} totalExpenses={totalExpenses} />
        </div>
        <div className='flex flex-col items-center'>
          <TransactionList transactions={transactions} /> 
        </div>
        <div className='flex flex-col items-center'>
          <AddTransaction onAddTransaction={addTransactionHandler} /> 
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-3 lg:mt-4 bg-black hover:bg-gray-800 text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded">
          <button onClick={clearTransactionsHandler}>Clear Transactions</button>
        </div>
      </div>
    </div>
  );
}

export default App;
