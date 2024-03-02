import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="text-lg md:text-xl lg:text-2xl">
      <h2 className="font-bold">Transaction History:</h2>
      <ul className="mt-1 md:mt-2 lg:mt-3">
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-1 md:mb-2 lg:mb-3">
            {transaction.type}: {transaction.amount >= 0 ? '+' : '-'}Php {Math.abs(transaction.amount)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
