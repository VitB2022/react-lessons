import React from 'react';

import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(trans => (
      <Transaction key={trans.id} {...trans} />
    ))}
  </ul>
);

export default TransactionsList;
