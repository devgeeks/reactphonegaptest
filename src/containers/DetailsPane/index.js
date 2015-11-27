import React from 'react';
import { connect } from 'react-redux';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import Navbar from '../../components/Navbar';
import MediaDetails from '../../components/MediaDetails';

const DetailsPane = React.createClass({

  displayName: 'DetailsPane',

  propTypes: {
    history: React.PropTypes.object,
    params: React.PropTypes.object,
    results: React.PropTypes.object,
  },

  handleBackButton: function(e) {
    e.preventDefault();
    const { history } = this.props;
    history.goBack();
  },

  render: function() {
    const { searchResults } = this.props.results;
    const { results } = searchResults;
    const { id:resultsIndex } = this.props.params;
    const mediaItem = results[resultsIndex];
    return (
      <div>
        <Navbar extended={ true }>
          <button name='back' onClick={ this.handleBackButton }>
            <MdArrowBack />
          </button>
          <h1>Item Detail</h1>
        </Navbar>
        <MediaDetails mediaItem={ mediaItem } />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { results } = state;
  return { results };
}

export default connect(mapStateToProps)(DetailsPane);
