'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';
import AlbumContainer from './containers/AlbumContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import ArtistContainer from './containers/ArtistContainer';
import ArtistsContainer from './containers/ArtistsContainer';

//use browserHistory to avoid the # issues

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRedirect to='albums' />
        <Route path='albums' component={AlbumsContainer} />
        <Route path='albums/:albumId' component={AlbumContainer} />
        <Route path='artists' component={ArtistsContainer} />
        <Route path='artists/:artistId' component={ArtistContainer} />
        <Route path='artists/:artistId/albums' component={AlbumsContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

