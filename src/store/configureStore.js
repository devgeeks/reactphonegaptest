import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let createMyStore = () => {};
if (process.env.NODE_ENV !== 'production') {
  const { devTools, persistState } = require('redux-devtools');
  createMyStore = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug=([^&]+)\b/)),
  )(createStore);
} else {
  createMyStore = compose(
    applyMiddleware(thunk)
  )(createStore);
}

export default function configureStore(initialState) {
  const store = createMyStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
