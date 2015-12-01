import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'Fab',

  propTypes: {
    children: React.PropTypes.any,
    handleFabClick: React.PropTypes.func,
    navbar: React.PropTypes.bool,
  },

  handleClick(e) {
    e.preventDefault();
    const { handleFabClick } = this.props;
    handleFabClick();
  },

  render() {
    const { navbar } = this.props;
    const cx = classNames({
      'fab': true,
      'navbar': !!navbar,
    });
    return (
      <a className={ cx } onClick={ this.handleClick }>
        { this.props.children }
      </a>
    );
  },
});
