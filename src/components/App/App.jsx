import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import Transactions from '../Transactions/Transactions';
import './App.css'

import user from '../../assets/user.json';
import stats from '../../assets/stats.json';
import friends from '../../assets/friends.json';
import transactions from '../../assets/transactions.json'

export const App = () => {
  return (
    <div className="app">
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends}/>
      <Transactions transactions={transactions}/>
    </div>
  );
};
