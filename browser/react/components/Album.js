'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
// import { fetchAndGoToAlbum } from '../action-creators/albums';

class Album extends React.Component {

  componentDidMount() {
    fetch(`/api/albums/${this.props.params.albumId}`)
      .then(res => res.json())
      .then(album => this.props.go(album))
  }

  render() {
    return(
      <div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>
    )
  }
};

export default Album;
