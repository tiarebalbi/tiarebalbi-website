import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset/dist/bundle.css';
import 'highlight.js/styles/atom-one-dark.css';
import loadable from '@loadable/component';
import LoadingView from './components/Common/LoadingView';

const LoadableApp = loadable(() => import('./containers/App'), {
  fallback: LoadingView,
});

const rootElement = document.getElementById('root');
render(<LoadableApp />, rootElement);

serviceWorker.register();
