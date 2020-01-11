import * as React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import LoadingView from './components/Common/LoadingView';

const Home = loadable(() => import('./pages/Home'), {
  fallback: LoadingView,
});

const Articles = loadable(() => import('./pages/Articles'), {
  fallback: LoadingView,
});

const ArticleViewer = loadable(() => import('./pages/ArticleViewer'), {
  fallback: LoadingView,
});

const NotFound = loadable(() => import('./pages/NotFound'), {
  fallback: LoadingView,
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
