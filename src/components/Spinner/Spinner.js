import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'Spinner',

  propTypes: {
    dark: React.PropTypes.bool,
    height: React.PropTypes.string,
    inline: React.PropTypes.bool,
    pending: React.PropTypes.bool,
    width: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      dark: false,
      height: '30px',
      inline: false,
      pending: false,
      width: '30px',
    };
  },

  render() {
    const { width, height, dark, pending, inline } = this.props;
    const classes = classNames({
      'spinner-container': true,
      'pending': pending,
      'dark': dark,
    });

    const spinnerDivStyle = {
      width: width,
      display: (inline ? 'inline-' : '') + 'block',
    };

    return (
      <div className={ classes } style={ spinnerDivStyle }>
        <svg className="spinner" width={ width } height={ height }
            viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="path" fill="none" strokeWidth="3"
            strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    );
  },
});
