import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

const App = React.createClass({

  propTypes: {
    children: React.PropTypes.any,
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  displayName: 'App',

  render: function() {

    let key = this.props.location.pathname;

    return (
      <div className='app'>
        <CSSTransitionGroup
            transitionEnterTimeout={ 250 } transitionLeaveTimeout={ 250 }
            transitionName='routetransition'>
          { React.cloneElement(this.props.children || <div />, { key: key }) }
        </CSSTransitionGroup>
      </div>
    );
  }

});

export default connect()(App);
