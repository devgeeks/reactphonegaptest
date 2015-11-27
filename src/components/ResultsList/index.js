import React from 'react';

import MediaListItem from '../MediaListItem';

import './index.less';

export default React.createClass({

  displayName: 'ResultsList',

  propTypes: {
    searchResults: React.PropTypes.object,
  },

  render: function() {

    const { searchResults } = this.props;

    const results =
      searchResults.results.map(
        (result, idx) => {
          return (<MediaListItem key={ result.trackId } mediaItem={ result }
              mediaItemIndex={ idx }/>);
        }
      );

    return (
      <div className='results-list'>
        <ul>
          { results }
        </ul>
      </div>
    );
  }
});
