import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import Navbar from '../../components/Navbar';
import ResultsList from '../../components/ResultsList';
import Loading from '../../components/Loading';

const ResultsPane = React.createClass({

  displayName: 'ResultsPane',

  //componentDidMount: function() {
    //const { dispatch } = this.props;
    //const params = {
      //term: 'redux',
      //entity: 'song',
      //explicit: false,
      //limit: 25,
      //callback: '',
    //};
    //dispatch(searchMedia(params));
  //},

  propTypes: {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  render: function() {
    const { results } = this.props;
    const { searchResults, loading } = results;
    return (
      <div>
        <Navbar>
          <button name='back' onClick={ this.handleBackButton }><MdArrowBack /></button>
          <h1>Results</h1>
        </Navbar>
        <Loading dismissed={ !loading } />
        <ResultsList searchResults={ searchResults } />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { results } = state;
  return { results };
}

export default connect(mapStateToProps)(ResultsPane);
