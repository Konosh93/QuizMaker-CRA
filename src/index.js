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
import store from './store';
import App from './containers';
import 'font-awesome/css/font-awesome.min.css';
import { subscribeQuiz } from './storage';


subscribeQuiz(store);

render(
  <Provider store={store}>
    <App />
  </Provider>
      , document.getElementById('root')
);
