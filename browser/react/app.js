'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import AlbumContainer from './containers/Album';
import AlbumsContainer from './containers/Albums';
import ArtistsContainer from './containers/Artists';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <Route path='/albums' component={AlbumsContainer} />
        <Route path='/albums/:albumId' component={AlbumContainer} />
        <Route path='/artists' component={ArtistsContainer} />
        <IndexRoute component={AppContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
