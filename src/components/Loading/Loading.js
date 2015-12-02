import React from 'react';
import classNames from 'classnames';

import Spinner from 'components/Spinner';

import './index.less';

export default React.createClass({

  displayName: 'Loading',

  propTypes: {
    dismissed: React.PropTypes.bool,
  },

  render() {
    const { dismissed } = this.props;

    const cx = classNames({
      'loading': true,
      'dismissed': !!dismissed,
    });

    return (
      <div className={ cx }>
        <Spinner pending dark height="60px" width="60px" />
      </div>
    );
  },
});
