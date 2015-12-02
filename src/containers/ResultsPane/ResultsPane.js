import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import Navbar from '../../components/Navbar';
import ResultsList from '../../components/ResultsList';
import Loading from '../../components/Loading';
import { selectMedia } from '../../actions/media';

const ResultsPane = React.createClass({

  displayName: 'ResultsPane',

  propTypes: {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleBackButton(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  handleItemClick(mediaItem) {
    const { dispatch, history } = this.props;
    dispatch(selectMedia(mediaItem));
    history.pushState(null, '/details');
  },

  render() {
    const { results } = this.props;
    const { searchResults, loading } = results;
    return (
      <div>
        <Navbar>
          <button name="back" onClick={ this.handleBackButton }><MdArrowBack /></button>
          <h1>Results</h1>
        </Navbar>
        <Loading dismissed={ !loading } />
        <ResultsList handleItemClick={ this.handleItemClick } searchResults={ searchResults } />
      </div>
    );
  },
});

function mapStateToProps(state) {
  const { results } = state;
  return { results };
}

export default connect(mapStateToProps)(ResultsPane);
