import React from 'react';


import './index.less';

export default React.createClass({

  displayName: 'SearchForm',

  propTypes: {
    handleSearch: React.PropTypes.func,
  },

  handleSubmit: function(e) {
    e.preventDefault();
    const { handleSearch } = this.props;
    const term = this.refs.searchTerm.value;
    if (!term) {
      return;
    }
    e.preventDefault();
    handleSearch({
      term
    });
  },

  render: function() {
    return (
      <div className='search-form'>
        <form onSubmit={ this.handleSubmit }>
          <div className='label'>Criteria</div>
          <input ref='searchTerm' type='text'
              placeholder='Search for a song, video or book' />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
});
