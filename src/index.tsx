import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App/App';

// Suppress the deprecation warning for ReactDOM.render
// @ts-ignore
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
