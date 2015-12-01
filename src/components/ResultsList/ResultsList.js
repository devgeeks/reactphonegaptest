import React from 'react';

import MediaListItem from '../MediaListItem';

import './index.less';

export default React.createClass({

  displayName: 'ResultsList',

  propTypes: {
    handleItemClick: React.PropTypes.func,
    searchResults: React.PropTypes.object,
  },

  render() {
    const { searchResults, handleItemClick } = this.props;

    const results =
      searchResults.results.map(
        (result, idx) => {
          return (<MediaListItem handleItemClick={ handleItemClick }
              key={ result.trackId } mediaItem={ result }
              mediaItemIndex={ idx } />);
        }
      );

    return (
      <div className="results-list">
        <ul>
          { results }
        </ul>
      </div>
    );
  },
});
