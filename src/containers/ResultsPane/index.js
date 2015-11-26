import React from 'react';
import { connect } from 'react-redux';
import { MdArrowBack } from 'react-icons/lib/md';

import Navbar from '../../components/Navbar';
import ResultsList from '../../components/ResultsList';
import Loading from '../../components/Loading';

import { searchMedia } from '../../actions/search';

const ResultsPane = React.createClass({

  displayName: 'ResultsPane',

  componentDidMount: function() {
    const { dispatch } = this.props;
    const params = {
      term: 'react',
      entity: 'song',
      explicit: false,
      limit: 25,
      callback: '',
    };
    dispatch(searchMedia(params));
  },

  propTypes: {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object,
    search: React.PropTypes.object,
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  render: function() {
    const { search } = this.props;
    const { searchResults, loading } = search;
    return (
      <div>
        <Navbar>
          <button name='back' onClick={ this.handleBackButton }><MdArrowBack /></button>
          <h1>Results</h1>
          <button />
        </Navbar>
        <Loading dismissed={ !loading } />
        <ResultsList searchResults={ searchResults } />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { search } = state;
  return { search };
}

export default connect(mapStateToProps)(ResultsPane);
