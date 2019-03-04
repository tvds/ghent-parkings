import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ParkingDashboardPage from './../components/ParkingDashboardPage';
import ParkingDetailPage from './../components/ParkingDetailPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={ParkingDashboardPage} exact={true} />
          <Route path="/details/:id" component={ParkingDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;