import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import classNames from 'classnames';

const App = React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.any,
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object,
  },

  render() {
    const cx = classNames({
      'app': true,
    });

    const key = this.props.location.pathname;

    return (
      <div className={ cx }>
        <CSSTransitionGroup
            transitionEnterTimeout={ 250 } transitionLeaveTimeout={ 250 }
            transitionName="routetransition">
          { React.cloneElement(this.props.children || <div />, { key: key }) }
        </CSSTransitionGroup>
      </div>
    );
  },

});

export default connect()(App);
