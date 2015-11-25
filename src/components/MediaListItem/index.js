import React from 'react';
// import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'MediaListItem',

  propTypes: {
    mediaItem: React.PropTypes.object
  },

  render: function() {
    const { mediaItem } = this.props;
    return (
      <li className='media-list-item'>
        <img className='artwork' src={ mediaItem.artworkUrl100 } />
        <div className='info'>
          <div className='title'>{ mediaItem.trackName }</div>
          <div className='subtitle'>{ mediaItem.artistName }</div>
          <div className='collectiontitle'>{ mediaItem.collectionName }</div>
        </div>
        <div className='price'>{ mediaItem.trackPrice }</div>
      </li>
    );
  }
});
