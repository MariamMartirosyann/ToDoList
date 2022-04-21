import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../src/app/redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
