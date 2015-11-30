import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdPlayArrow from 'react-icons/lib/md/play-arrow';
import MdStop from 'react-icons/lib/md/stop';

import Navbar from '../../components/Navbar';
import MediaDetails from '../../components/MediaDetails';
import Fab from '../../components/Fab';
import Spinner from '../../components/Spinner';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

  propTypes: {
    history: React.PropTypes.object,
    media: React.PropTypes.object,
    params: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  createAudioPreview: function() {
    const { media:mediaItem } = this.props;
    if (window && window.cordova) {
      // Use the Media plugin
      return new Media(mediaItem.previewUrl,
          () => { console.log('Media Success'); },
          (error) => { console.log('Media fail ' + error); },
          (status) => {
            console.log(status);
            switch (status) {
              case Media.MEDIA_STARTING:
                console.log('starting');
                this.setState({ isPlaying: false, isLoading: true });
                break;
              case Media.MEDIA_RUNNING:
                console.log('running');
                this.setState({ isPlaying: true, isLoading: false })
                break;
              case Media.MEDIA_STOPPED:
              case Media.MEDIA_PAUSED:
                console.log('stopped/paused');
                this.setState({ isPlaying: false, isLoading: false });
            }
          });
    } else {
      // Use html5 Audio
      let audio = new Audio(mediaItem.previewUrl);
      audio.stop = audio.pause;
      return audio;
    }
  },

  getInitialState: function() {
    return {
      audioPreview: this.createAudioPreview(),
      isLoading: false,
      isPlaying: false,
    };
  },

  componentWillUnmount: function() {
    let { audioPreview, isPlaying, isLoading } = this.state;
    if (isPlaying || isLoading) {
      audioPreview.stop()
    }
    if (window && window.cordova) audioPreview.release();
    audioPreview = null
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  handleFabClick: function() {
    let { audioPreview, isLoading, isPlaying } = this.state;

    if (isPlaying || isLoading) {
      audioPreview.stop();
      setTimeout(() => {
        if (window && window.cordova) audioPreview.release();
        audioPreview = null;
        this.setState({
          isPlaying: false,
         isLoading: false,
         audioPreview: this.createAudioPreview(),
        });
      }, 20);
    } else {
      setTimeout(() => {
        audioPreview.play();
      }, 20);
      this.setState({
        isLoading: true,
        isPlaying: false,
      });
    }
  },

  render: function() {
    const { media:mediaItem } = this.props;
    const { isPlaying, isLoading } = this.state;
    let fabChild = <MdPlayArrow size='48' />;
    if (isPlaying) {
      fabChild = <MdStop size='48' />;
    }
    if (isLoading) {
      fabChild = (<Spinner pending={ true } dark={ false } height='32px'
        width='32px' />);
    }
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
          { fabChild }
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
