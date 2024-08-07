import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';
import { thunk } from 'redux-thunk';
import App from './App/App';

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Lets Create the store with uiReducer
const store = createStore(uiReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);