import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/posts/:id" component={Post} />
  </Switch>
);

export default Routes;
