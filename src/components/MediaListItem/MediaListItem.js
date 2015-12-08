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
      album,
      name,
      artists,
    } = mediaItem;
    return (
      <li className="media-list-item">
        <a href="#" onClick={ this.handleClick } className="content"
            mediaItem={ mediaItem }>
          <img alt="artwork" className="artwork"
              src={ album.images[1].url } />
          <div className="info">
            <div className="title">{ name }</div>
            <div className="subtitle">{ artists[0].name }</div>
            <div className="collectiontitle">{ album.name }
            </div>
          </div>
        </a>
      </li>
    );
  },
});
