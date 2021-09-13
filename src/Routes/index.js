import React, { memo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailsView from '../Pages/DetailsView';
import PeopleTable from '../Pages/PeopleTable';
import { ROUTES } from '../constants/routes';

const Routes = memo(() => (
  <Router>
    <Route exact path={ROUTES.DETAILS_PAGE}>
      <DetailsView />
    </Route>
    <Route exact path={ROUTES.MAIN}>
      <PeopleTable />
    </Route>
  </Router>
));

Routes.displayName = 'Routes';

export default Routes;
