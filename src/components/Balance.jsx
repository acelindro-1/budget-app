import React from 'react';

function Balance({ totalBalance }) {
  return (
    <div className="text-lg md:text-xl lg:text-2xl p-4 rounded">
      <h2 className="font-bold">Balance:</h2>
      <div className="mt-1 md:mt-2 lg:mt-3">Php {totalBalance.toLocaleString()}</div>
    </div>
  );
}

export default Balance;
