import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import './App.css'

import user from '../../assets/user.json';
import stats from '../../assets/stats.json';

export const App = () => {
  return (
    <div className="app">
      <Profile user={user} />
      {/* <Statistics stats={stats} /> */}
    </div>
  );
};
