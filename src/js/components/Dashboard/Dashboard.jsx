import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from './Profile';
import DashboardHome from './Dashboard-Home';

const Dashboard = () => (
  <div>
    <Switch>
      <Route path="/dashboard/profile" component={Profile} />
      <Route path="/dashboard" component={DashboardHome} />
    </Switch>
  </div>
);

export default Dashboard;
