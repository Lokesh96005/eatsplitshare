import React, { useState, useEffect } from 'react';

function SplitCard({ friend, updateBalance, closeCard }) {
  const [total, setTotal] = useState('');
  const [yourShare, setYourShare] = useState('');
  const [payer, setPayer] = useState('you');
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const t = parseFloat(total);
    const y = parseFloat(yourShare);
    if (!isNaN(t) && !isNaN(y)) {
      setRemaining((t - y).toFixed(2));
    } else {
      setRemaining(0);
    }
  }, [total, yourShare]);

  const handleSubmit = () => {
    const amt = parseFloat(remaining);
    if (payer === 'you') {
      updateBalance(friend, amt); // friend owes you
    } else {
      updateBalance(friend, -amt); // you owe friend
    }
    closeCard();
  };

  return (
    <div className="card p-3 mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5>💸 Split with {friend}</h5>
        <button className="btn btn-sm btn-outline-danger" onClick={closeCard}>Close</button>
      </div>
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Total expense"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Your share"
        value={yourShare}
        onChange={(e) => setYourShare(e.target.value)}
      />
      <div className="mb-2">Remaining: ₹{remaining}</div>
      <select
        className="form-select mb-2"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value="you">You paid</option>
        <option value="friend">{friend} paid</option>
      </select>
      <button className="btn btn-success" onClick={handleSubmit}>Confirm Split</button>
    </div>
  );
}

export default SplitCard;