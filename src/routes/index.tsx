import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Result from '../pages/Result';
import NotFound from '../pages/NotFound';
import Detail from '../pages/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/main" component={Main} isPrivate />

    <Route path="/result/:company" component={Result} isPrivate />
    <Route path="/notFound/:company" component={NotFound} isPrivate />

    <Route path="/detail/:id" component={Detail} isPrivate />
  </Switch>
);

export default Routes;
