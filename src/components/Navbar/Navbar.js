import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'Navbar',

  propTypes: {
    children: React.PropTypes.any,
    extended: React.PropTypes.bool,
  },

  render() {
    const { extended } = this.props;
    const cx = classNames({
      'navbar': true,
      'extended': !!extended,
    });
    return (
      <header ref="header" className={ cx }>
        { this.props.children }
      </header>
    );
  },
});
