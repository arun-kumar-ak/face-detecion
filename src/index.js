import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);

reportWebVitals();
