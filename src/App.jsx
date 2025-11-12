import React, { useState } from 'react';
import FriendsCard from './components/FriendsCard';
import SplitCard from './components/SplitCard';

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [balances, setBalances] = useState({}); // { Lokesh: 100, Arjun: -50 }

  const updateBalance = (name, amount) => {
    setBalances(prev => ({
      ...prev,
      [name]: (prev[name] || 0) + amount
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <FriendsCard
            balances={balances}
            onSplitClick={setSelectedFriend}
          />
        </div>
        <div className="col-md-8">
          {selectedFriend && (
            <SplitCard
              friend={selectedFriend}
              updateBalance={updateBalance}
              closeCard={() => setSelectedFriend(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;