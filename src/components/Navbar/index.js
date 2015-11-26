import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'Navbar',

  propTypes: {
    children: React.PropTypes.any
  },

  render: function() {
    const cx = classNames({
      'navbar': true
    });
    return (
      <header className={ cx }>
        { this.props.children }
      </header>
    );
  }
});
