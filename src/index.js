import * as React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset/dist/bundle.css';
import 'highlight.js/styles/atom-one-dark.css';
import App from './containers/App';

const rootElement = document.getElementById('root');
render(<App />, rootElement);

serviceWorker.register();
