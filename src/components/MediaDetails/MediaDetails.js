import React from 'react';
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
        <div className="">{ mediaItem.collectionCensoredName }</div>
        <div className="">{ mediaItem.primaryGenreName }</div>
        <div className="label">Preview</div>
        <div />
      </div>
    );
  },
});
