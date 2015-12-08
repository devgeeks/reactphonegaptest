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
        <div className="label">Album Details</div>
        <div className="collection-details">
          <div className="row">
            <div className="collection-name">{ mediaItem.album.name }</div>
          </div>
        </div>
        <div />
      </div>
    );
  },
});
