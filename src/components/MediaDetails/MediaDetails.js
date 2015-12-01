import React from 'react';
import moment from 'moment';
// import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'MediaDetails',

  propTypes: {
    mediaItem: React.PropTypes.object,
  },

  render() {
    const { mediaItem } = this.props;

    return (
      <div className="media-details">
        <div className="label">Collection Details</div>
        <div className="collection-details">
          <div className="row">
            <div className="collection-name">{ mediaItem.collectionCensoredName }</div>
            <div className="collection-price">${ mediaItem.collectionPrice }</div>
          </div>
          <div className="row">
            <div className="collection-key">Released</div>
            <div className="collection-value">{ moment(mediaItem.releaseDate, moment.ISO_8601).format('MMMM Do YYYY') }</div>
          </div>
          <div className="row">
            <div className="collection-key">Genre</div>
            <div className="collection-value">{ mediaItem.primaryGenreName }</div>
          </div>
        </div>
        <div />
      </div>
    );
  },
});
