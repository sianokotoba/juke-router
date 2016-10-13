'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { receiveAlbum } from '../action-creators/albums';


const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(receiveAlbum(album));
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
