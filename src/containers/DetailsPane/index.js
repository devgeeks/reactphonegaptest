import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import Navbar from '../../components/Navbar';
import MediaDetails from '../../components/MediaDetails';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

  propTypes: {
    history: React.PropTypes.object,
    params: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  render: function() {
    const { searchResults } = this.props.results;
    const { results } = searchResults;
    const { id:resultsIndex } = this.props.params;
    const mediaItem = results[resultsIndex];
    return (
      <div>
        <Navbar ref='navbar' extended={ true }>
          <div className='bg'
              style={ {
                background: 'url(' + mediaItem.artworkUrl100 +
                                ') center center no-repeat',
                backgroundSize: '100%'
              } } />
          <button name='back' style={ { zIndex: 2 } } onClick={ this.handleBackButton }>
            <MdArrowBack />
          </button>
          <div className='extendedContent'>
            <img width='100' src={ mediaItem.artworkUrl100 } alt='artwork' />
            <div className='info'>
              <div className='title'>{ mediaItem.trackCensoredName }</div>
              <div className='subtitle'>{ mediaItem.artistName }</div>
            </div>
          </div>
        </Navbar>
        <MediaDetails mediaItem={ mediaItem } />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { results } = state;
  return { results };
}

export default connect(mapStateToProps)(DetailsPane);
