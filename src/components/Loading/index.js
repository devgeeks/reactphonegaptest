import React from 'react';
import classNames from 'classnames';

import Spinner from '../Spinner';

import './index.less';

export default React.createClass({

  displayName: 'Loading',

  propTypes: {
    dismissed: React.PropTypes.bool
  },

  render: function() {

    const { dismissed } = this.props;

    const cx = classNames({
      'loading': true,
      'dismissed': !!dismissed
    });

    return (
      <div className={ cx }>
        <Spinner pending={ true } dark={ true } height='60px' width='60px' />
      </div>
    );
  }
});
