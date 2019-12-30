import * as React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import LoadingView from './components/Common/LoadingView';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: LoadingView,
});

const Articles = Loadable({
  loader: () => import('./pages/Articles'),
  loading: LoadingView,
});

const ArticleViewer = Loadable({
  loader: () => import('./pages/ArticleViewer'),
  loading: LoadingView,
});

const NotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: LoadingView,
});

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
    <Route exact path="/not-found">
      <NotFound theme={theme} />
    </Route>
    <Route path="*">
      <NotFound theme={theme} />
    </Route>
  </Switch>
);
