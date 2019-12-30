import * as React from 'react';
import { hydrate, render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset/dist/bundle.css';

import App from './containers/App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

serviceWorker.register();
