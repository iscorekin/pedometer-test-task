import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route
            exact
            path='/'
            component={React.lazy(() => import('../../layouts/Meter'))}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
