import React, { useState } from 'react';
import FriendItem from './FriendItem';

function FriendsCard({ balances, onSplitClick }) {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  const addFriend = () => {
    if (name.trim() && !friends.includes(name)) {
      setFriends([...friends, name]);
      setName('');
    }
  };

  return (
    <div className="card p-3">
      <h5>👥 Friends List</h5>
      <div className="input-group mb-2">
        <input
          className="form-control"
          placeholder="Enter friend's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addFriend}>Add</button>
      </div>
      <ul className="list-group">
        {friends.map((friend, i) => (
          <FriendItem
            key={i}
            name={friend}
            balance={balances[friend] || 0}
            onSplitClick={() => onSplitClick(friend)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendsCard;