import React from 'react';
import { connect } from 'react-redux';
import MdMenu from 'react-icons/lib/md/menu';

import { searchMedia, searchFailed } from '../../actions/search';
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';

const SearchPane = React.createClass({

  displayName: 'SearchPane',

  propTypes: {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleSearch(params) {
    const { dispatch, history } = this.props;
    if (!params.q) {
      dispatch(searchFailed('Search cannot be empty'));
      return;
    }
    dispatch(searchMedia(params));
    history.push('/results');
  },

  render() {
    const { results } = this.props;
    const { loading, error } = results;
    return (
      <div>
        <Navbar>
          <button><MdMenu /></button>
          <h1>iTunes Media Explorer</h1>
        </Navbar>
        <SearchForm error={ error } loading={ loading }
            handleSearch={ this.handleSearch } />
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { results } = state;
  return { results };
}

export default connect(mapStateToProps)(SearchPane);
