import React from 'react';
// import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'MediaListItem',

  propTypes: {
    handleItemClick: React.PropTypes.func,
    mediaItem: React.PropTypes.object,
    mediaItemIndex: React.PropTypes.number,
  },

  handleClick(e) {
    e.preventDefault();
    const { handleItemClick, mediaItem } = this.props;
    handleItemClick(mediaItem);
  },

  render() {
    const { mediaItem } = this.props;
    const {
      artworkUrl60,
      trackCensoredName,
      artistName,
      collectionCensoredName,
      trackPrice,
    } = mediaItem;
    return (
      <li className="media-list-item">
        <a href="#" onClick={ this.handleClick } className="content"
            mediaItem={ mediaItem }>
          <img alt="artwork" className="artwork"
              src={ artworkUrl60 } />
          <div className="info">
            <div className="title">{ trackCensoredName }</div>
            <div className="subtitle">{ artistName }</div>
            <div className="collectiontitle">{
              collectionCensoredName }
            </div>
          </div>
          <div className="price">${ trackPrice }</div>
        </a>
      </li>
    );
  },
});
