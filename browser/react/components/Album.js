'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';

class Album extends React.Component {

  componentDidMount() {
    this.props.fetch(this.props.params.albumId);
     
  }

  render() {
    console.log(selectedAlbum)
    const {selectedAlbum} = this.props;
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
