/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './src/containers';


render(
  <Provider store={store}>
    <App />
  </Provider>
      , document.getElementById('root')
);
