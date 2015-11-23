import React from 'react';
import { connect } from 'react-redux';

const ResultsPane = React.createClass({

  displayName: 'ResultsPane',

  propTypes: {
    history: React.PropTypes.object
  },

  render: function() {
    return (
      <div />
    );
  }
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ResultsPane);
