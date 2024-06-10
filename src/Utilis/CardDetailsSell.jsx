import React from 'react';

function CardDetailsSell({ stockName,stockSellQuantity,stockSellPrice, stockSellDate }) {
  return (
      <div className="border border-gray-300 rounded-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{stockName}</h2>
      <p className="text-blue-600 mb-1">Quantity: {stockSellQuantity}</p>
      <p className="text-blue-600 mb-1">Sell Price: {stockSellPrice}</p>
      <p className="text-blue-600">Sell Date: {stockSellDate}</p>
     
    </div>
  );
}

export default CardDetailsSell;
