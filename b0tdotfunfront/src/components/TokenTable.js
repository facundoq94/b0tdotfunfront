import React from 'react';

const TokenTable = ({ tokenData }) => {
  // Calcular los totales
  let totalBuyAmount = 0;
  let totalSellAmount = 0;
  let totalBuyValue = 0;
  let totalSellValue = 0;

  Object.keys(tokenData).forEach((tokenCA) => {
    totalBuyAmount += tokenData[tokenCA].totalBuyAmount;
    totalSellAmount += tokenData[tokenCA].totalSellAmount;
    totalBuyValue += tokenData[tokenCA].totalBuyValue;
    totalSellValue += tokenData[tokenCA].totalSellValue;
  });

  const percentageChange = ((totalSellValue - totalBuyValue) / totalBuyValue) * 100;

  return (
    <table>
      <thead>
        <tr>
          <th>Token CA</th>
          <th>Tokens buy</th>
          <th>Tokens sell</th>
          <th>Total buy SOL</th>
          <th>Total sell SOL</th>
          <th>Percentage Change</th>
          <th>Buy Count</th>
          <th>Sell Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tokenData).map((tokenCA) => (
          <tr key={tokenCA}>
            <td>{tokenCA}</td>
            <td>{tokenData[tokenCA].totalBuyAmount.toFixed(2)}</td>
            <td>{tokenData[tokenCA].totalSellAmount.toFixed(2)}</td>
            <td>{tokenData[tokenCA].totalBuyValue.toFixed(4)}</td>
            <td>{tokenData[tokenCA].totalSellValue.toFixed(4)}</td>
            <td>{tokenData[tokenCA].percentageChange.toFixed(2)}%</td>
            <td>{tokenData[tokenCA].buyCount}</td>
            <td>{tokenData[tokenCA].sellCount}</td>
          </tr>
        ))}
        <tr>
          <td><strong>Totals</strong></td>
          <td><strong>{totalBuyAmount.toFixed(2)}</strong></td>
          <td><strong>{totalSellAmount.toFixed(2)}</strong></td>
          <td><strong>{totalBuyValue.toFixed(4)}</strong></td>
          <td><strong>{totalSellValue.toFixed(4)}</strong></td>
          <td><strong>{percentageChange.toFixed(2)}%</strong></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TokenTable;