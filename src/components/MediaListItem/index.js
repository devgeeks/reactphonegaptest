import React from 'react';
import { Link } from 'react-router';
// import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'MediaListItem',

  propTypes: {
    mediaItem: React.PropTypes.object,
    mediaItemIndex: React.PropTypes.number,
  },

  render: function() {
    const { mediaItem, mediaItemIndex } = this.props;
    const {
      artworkUrl60,
      trackCensoredName,
      artistName,
      collectionCensoredName,
      trackPrice,
    } = mediaItem;
    return (
      <li className='media-list-item'>
        <Link to={ `/details/${mediaItemIndex}` } className='content'
            mediaItem={ mediaItem }>
          <img alt='artwork' className='artwork'
              src={ artworkUrl60 } />
          <div className='info'>
            <div className='title'>{ trackCensoredName }</div>
            <div className='subtitle'>{ artistName }</div>
            <div className='collectiontitle'>{
              collectionCensoredName }
            </div>
          </div>
          <div className='price'>${ trackPrice }</div>
        </Link>
      </li>
    );
  }
});
