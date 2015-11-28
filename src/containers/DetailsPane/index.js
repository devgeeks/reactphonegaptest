import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdPlayArrow from 'react-icons/lib/md/play-arrow';

import Navbar from '../../components/Navbar';
import MediaDetails from '../../components/MediaDetails';
import Fab from '../../components/Fab';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

  propTypes: {
    history: React.PropTypes.object,
    media: React.PropTypes.object,
    params: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  handleFabClick: function() {
    const { media:mediaItem } = this.props;

    switch (mediaItem.wrapperType) {
      case 'track':
        console.log('play song');
        break;
      case 'audiobook':
        console.log('show description');
        break;
      case 'videoclip':
        console.log('play video');
        break;
      default:
    };
  },

  render: function() {
    const { media:mediaItem } = this.props;
    return (
      <div>
        <Navbar ref='navbar' extended={ true }>
          <button name='back' style={ { zIndex: 2 } } onClick={ this.handleBackButton }>
            <MdArrowBack />
          </button>
          <h1 />
          <button />
          <div className='bg'
              style={ {
                background: 'url(' + mediaItem.artworkUrl100 +
                                ') center center no-repeat',
                backgroundSize: '100%'
              } } />
          <div className='extendedContent'>
            <img width='100' src={ mediaItem.artworkUrl100 } alt='artwork' />
            <div className='info'>
              <div className='title'>{ mediaItem.trackCensoredName }</div>
              <div className='subtitle'>{ mediaItem.artistName }</div>
            </div>
          </div>
        </Navbar>
        <MediaDetails mediaItem={ mediaItem } />
        <Fab navbar={ true } handleFabClick={ this.handleFabClick }>
          <MdPlayArrow size='48' />
        </Fab>
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { media } = state;
  return { media };
}

export default connect(mapStateToProps)(DetailsPane);
