import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import Background from './components/Background/Background';

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
      <Background />
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);

reportWebVitals();
