import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ParkingDashboardPage from './../components/ParkingDashboardPage';
import ParkingDetailPage from './../components/ParkingDetailPage';
import NotFoundPage from './../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={ParkingDashboardPage} exact={true} />
        <Route path="/details/:id" component={ParkingDetailPage} />
        <Route component={NotFoundPage} />
        
      </Switch>
    </div>

  </Router>
);
/*<Route path="/detail/:id" component={ParkingDetailPage} />
<Route component={NotFoundPage} />*/

export default AppRouter;