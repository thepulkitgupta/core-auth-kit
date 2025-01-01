import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import store from './store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provides a Redux Store for the React Application */}
    <App/>
    </Provider>
  </React.StrictMode>
);

