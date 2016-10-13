'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Link } from 'react-router';

class Artist extends React.Component {
  componentDidMount() {
    this.props.fetch(this.props.params.artistId);
  }

  render() {
    const { artist, selectedArtist, children } = this.props;
    return(
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><a>ALBUMS</a></li>
          <li><a>SONGS</a></li>
        </ul>
        { children && React.cloneElement(children, { selectedArtist }) }
      </div>

    )
  }
}

export default Artist;

/* Old render function:
  render() {
    const { selectedArtist } = this.props;
    return(
      <div>
        <h3>{ selectedArtist.name }</h3>
        <h3>Albums</h3>
        <div className="row">
          {
            selectedArtist.albums && selectedArtist.albums.map(album => (
              <div className="col-xs-4" key={album.id}>
                <Link className="thumbnail" to={`/albums/${album.id}`}>
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
        <SongsContainer songs={selectedArtist.songs} />
      </div>

    )
  }
*/
