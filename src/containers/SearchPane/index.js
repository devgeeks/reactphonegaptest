import React from 'react';
import { connect } from 'react-redux';
import MdMenu from 'react-icons/lib/md/menu';

import { searchMedia } from '../../actions/search';
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';

const SearchPane = React.createClass({

  displayName: 'SearchPane',

  propTypes: {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object
  },

  handleSearch: function(params) {
    const { dispatch, history } = this.props;
    console.log('Search terms: ', params);
    dispatch(searchMedia(params));
    history.pushState(null, '/results');
  },

  render: function() {
    return (
      <div>
        <Navbar>
          <button><MdMenu /></button>
          <h1>iTunes Media Explorer</h1>
        </Navbar>
        <SearchForm handleSearch={ this.handleSearch } />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SearchPane);
