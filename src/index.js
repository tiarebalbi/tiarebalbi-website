import React from 'react';
import ReactDOM from 'react-dom';
import 'lazysizes/lazysizes';
import Loadable from 'react-loadable';
import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router';
import { history } from './helpers/history';
import * as serviceWorker from './helpers/serviceWorker';

const app = (
  <HelmetProvider>
    <Router history={history}>
      <Routes />
    </Router>
  </HelmetProvider>
);

function render() {
  return ReactDOM.render(app, document.querySelector('#root'));
}

Loadable.preloadReady()
  .then(render)
  .catch(err => {
    console.error(err);
  });

serviceWorker.register();
