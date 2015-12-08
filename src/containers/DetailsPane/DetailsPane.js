import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdPlayArrow from 'react-icons/lib/md/play-arrow';
import MdStop from 'react-icons/lib/md/stop';

import Navbar from 'components/Navbar';
import MediaDetails from 'components/MediaDetails';
import Fab from 'components/Fab';
import Spinner from 'components/Spinner';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

  propTypes: {
    history: React.PropTypes.object,
    media: React.PropTypes.object,
    params: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  getInitialState() {
    return {
      audioPreview: this.createAudioPreview(),
      isLoading: false,
      isPlaying: false,
    };
  },

  componentWillUnmount() {
    let { audioPreview } = this.state;
    const { isPlaying, isLoading } = this.state;
    if (isPlaying || isLoading) {
      audioPreview.stop();
    }
    if (window && window.cordova) audioPreview.release();
    audioPreview = null;
  },

  createAudioPreview() {
    const { media: mediaItem } = this.props;
    if (window && window.cordova) {
      // Use the Media plugin
      return new window.Media(mediaItem.preview_url,
          () => { console.log('Media Success'); },
          (error) => { console.log('Media fail ' + error); },
          (status) => {
            console.log(status);
            switch (status) {
            case window.Media.MEDIA_STARTING:
              console.log('starting');
              this.setState({ isPlaying: false, isLoading: true });
              break;
            case window.Media.MEDIA_RUNNING:
              console.log('running');
              this.setState({ isPlaying: true, isLoading: false });
              break;
            case window.Media.MEDIA_STOPPED:
            case window.Media.MEDIA_PAUSED:
              console.log('stopped/paused');
              this.setState({ isPlaying: false, isLoading: false });
              break;
            default:
            }
          });
    }
    // Use html5 Audio
    const audio = new Audio(mediaItem.preview_url);
    audio.stop = audio.pause;
    return audio;
  },

  handleBackButton(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  handleFabClick() {
    let { audioPreview } = this.state;
    const { isLoading, isPlaying } = this.state;

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

  render() {
    const { media: mediaItem } = this.props;
    const { isPlaying, isLoading } = this.state;
    let fabChild = <MdPlayArrow size="48" />;
    if (isPlaying) {
      fabChild = <MdStop size="48" />;
    }
    if (isLoading) {
      fabChild = (<Spinner pending dark={ false } height="32px"
        width="32px" />);
    }
    return (
      <div>
        <Navbar ref="navbar" extended>
          <button name="back" style={ { zIndex: 2 } } onClick={ this.handleBackButton }>
            <MdArrowBack />
          </button>
          <h1 />
          <button />
          <div className="bg"
              style={ {
                background: 'url(' + mediaItem.album.images[0].url +
                                ') center center no-repeat',
                backgroundSize: '100%',
              } } />
          <div className="extendedContent">
            <img width="100" src={ mediaItem.album.images[1].url } alt="artwork" />
            <div className="info">
              <div className="title">{ mediaItem.name }</div>
              <div className="subtitle">{ mediaItem.artists[0].name }</div>
            </div>
          </div>
        </Navbar>
        <MediaDetails mediaItem={ mediaItem } />
        <Fab navbar handleFabClick={ this.handleFabClick }>
          { fabChild }
        </Fab>
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { media } = state;
  return { media };
}

export default connect(mapStateToProps)(DetailsPane);
