import React, { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddTransaction = () => {
    onAddTransaction({ type: transactionType, amount: amount });
    setTransactionType('');
    setAmount('');
  };

  return (
    <div className="text-lg md:text-xl lg:text-2xl">
      <h2 className="font-bold">Add New Transaction</h2>
      <div className="mt-1 md:mt-2 lg:mt-3">
        <label htmlFor="transactionType" className="block">Type of Transaction:</label>
        <input
          type="text"
          id="transactionType"
          placeholder="Transaction Type"
          value={transactionType}
          onChange={handleTransactionTypeChange}
          className="w-full py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 mt-1 md:mt-2 lg:mt-3"
        />
      </div>
      <div className="mt-1 md:mt-2 lg:mt-3">
        <label htmlFor="amount" className="block">Enter Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full py-1 md:py-2 lg:py-3 px-2 md:px-3 lg:px-4 mt-1 md:mt-2 lg:mt-3"
        />
        <span className="block">(Please put "+" for income and "-" for expenses)</span>
      </div>
      <div className="flex justify-center">
    <button onClick={handleAddTransaction} className="mt-2 md:mt-3 lg:mt-4 bg-black hover:bg-gray-800 text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded">
    Add Transaction
    </button>
    </div>

    </div>
  );
}

export default AddTransaction;
