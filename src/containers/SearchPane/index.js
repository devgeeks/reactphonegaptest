import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';

const SearchPane = React.createClass({

  displayName: 'SearchPane',

  propTypes: {
    history: React.PropTypes.object
  },

  render: function() {
    return (
      <Navbar />
    );
  }
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchPane);
