import React from 'react';
import { connect } from 'react-redux';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

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

export default connect(mapStateToProps)(DetailsPane);
