import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router';
import Head from './components/page/head';
import { GlobalStyle } from './helpers/globalStyle';

const Loading = () => <span>Loading</span>;

const Home = Loadable({
  loader: () => import('./views/home' /* webpackChunkName: "home" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const Products = Loadable({
  loader: () => import('./views/products' /* webpackChunkName: "products" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const GetInTouch = Loadable({
  loader: () => import('./views/contact' /* webpackChunkName: "contact" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const NotFound = Loadable({
  loader: () => import('./views/not-found' /* webpackChunkName: "not-found" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const header = {
  title: 'hello.',
  description:
    'I’m a proud Software Engineer based in Ireland. Working with software development since 2006 ' +
    'I’ve been challenging my self on trying to understand what’s next.',
  keywords:
    'software engineer,java,scala,kotlin,react.js,angularjs,full stack developer,developer,coding,programming back-end,front-end,software architecture',
};

const Routes = () => {
  return (
    <div>
      <Head title={header.title} description={header.description} keywords={header.keywords} />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/get-in-touch" component={GetInTouch} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
