import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'Navbar',

  render: function() {
    const cx = classNames({
      'navbar': true
    });
    return (
      <header className={ cx } />
    );
  }
});
