import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleViewer from './pages/ArticleViewer';
import NotFound from './pages/NotFound';

export default ({ theme }) => (
  <Switch>
    <Route exact path="/">
      <Home theme={theme} />
    </Route>
    <Route exact path="/articles">
      <Articles theme={theme} />
    </Route>
    <Route exact path="/article/:slug">
      <ArticleViewer theme={theme} />
    </Route>
    <Route path="*">
      <NotFound theme={theme} />
    </Route>
  </Switch>
);
