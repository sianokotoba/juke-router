'use strict';

import React from 'react';
import { Link } from 'react-router';

export default ({ artists, go }) => (
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        artists.map(artist => (
          <div className="list-group-item" key={ artist.id }>
            <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
          </div>
        ))
      }
    </div>
  </div>
);
