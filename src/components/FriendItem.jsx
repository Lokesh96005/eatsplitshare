import React from 'react';

function FriendItem({ name, balance, onSplitClick }) {
  const status = balance === 0
    ? '✅ Settled'
    : balance > 0
    ? `${name} owes you ₹${balance}`
    : `You owe ${name} ₹${Math.abs(balance)}`;

  const color = balance === 0 ? 'text-muted' : balance > 0 ? 'text-success' : 'text-danger';

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{name}</strong>
        <div className={color}>{status}</div>
      </div>
      <button className="btn btn-sm btn-outline-secondary" onClick={onSplitClick}>Split</button>
    </li>
  );
}

export default FriendItem;