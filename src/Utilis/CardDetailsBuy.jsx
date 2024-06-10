import React from 'react';

function CardDetailsBuy({ stockName, stockQuantity, stockBuyPrice, stockBuyDate }) {
  return (
      <div className="border border-gray-300 rounded-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{stockName}</h2>
      <p className="text-gray-600 mb-1">Quantity: {stockQuantity}</p>
      <p className="text-gray-600 mb-1">Buy Price: {stockBuyPrice}</p>
      <p className="text-gray-600">Buy Date: {stockBuyDate}</p>
      <p className="text-gray-600">Buy Date: {stockBuyDate}</p>
    </div>
  );
}

export default CardDetailsBuy;
