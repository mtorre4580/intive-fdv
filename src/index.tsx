import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import ErrorBoundary from '../src/commons/error-handler/error-handler';

/**
 * Create the store for App
 */
const store = configureStore();

/**
 * Component Root with Provider Redux
 */
const Root = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

render(<Root />, document.getElementById('root'));