// This is the entry point for the whole app
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createHashHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import FastClick from 'fastclick';

import App from './containers/App';
import SearchPane from './containers/SearchPane';
import ResultsPane from './containers/ResultsPane';
import DetailsPane from './containers/DetailsPane';

// Copy across static files like index.html, etc
require('file?name=www/[name].[ext]!./index.html');
// Import styles generic across the entire app
require('./index.less');

// Create the global 'store' by running `configureStore()`
const store = configureStore();

// Hybrid apps need to use the hash history (hash locations) since they are
// often loaded from file:// not a server
// e.g.: index.html#/foo/bar etc
const history = createHashHistory();

// The `debug` element will hold the redux-devtools if needed
let debug = <div style={ {display: 'none'} } />;
// If not in PRODUCTION, we'll set the redux-devtools up in the `debug` element above
if (process.env.NODE_ENV !== 'production') {
  const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
  debug = (
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ LogMonitor } />
    </DebugPanel>
  );
}

document.addEventListener('deviceready', () => {
  if (window.StatusBar) {
    window.StatusBar.styleLightContent();
    window.StatusBar.backgroundColorByHexString('#512DA8');
    window.StatusBar.overlaysWebView(false);
  }
}, false);

// Render the Provider (complete with store) and the routes to the DOM
ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={ history }>
        <Route component={ App }>
          <Route path="search" component={ SearchPane } />
          <Route path="results" component={ ResultsPane } />
          <Route path="details" component={ DetailsPane } />
          <Redirect from="/" to="/search" />
        </Route>
      </Router>
    </Provider>
    { debug }
  </div>,
  document.getElementById('app')
);
FastClick.attach(document.body);
