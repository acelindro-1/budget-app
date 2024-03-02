import React from 'react';

function IncomeExpenses({ totalIncome, totalExpenses }) {
  return (
    <div className="text-lg md:text-xl lg:text-2xl">
      <h2 className="font-bold">Income & Expenses:</h2>
      <div className="mt-1 md:mt-2 lg:mt-3">Total Income: {totalIncome}</div>
      <div className="mt-1 md:mt-2 lg:mt-3">Total Expenses: {totalExpenses}</div>
    </div>
  );
}

export default IncomeExpenses;
