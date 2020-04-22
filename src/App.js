import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from './components/ui/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const BoardPage = lazy(() => import('./pages/BoardPage'));
const App = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/board" component={BoardPage} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
