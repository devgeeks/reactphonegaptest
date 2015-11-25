import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';

const SearchPane = React.createClass({

  displayName: 'SearchPane',

  propTypes: {
    history: React.PropTypes.object
  },

  render: function() {
    return (
      <div>
        <Navbar />
        <SearchForm />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchPane);
