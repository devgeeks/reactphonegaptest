import React from 'react';
import classNames from 'classnames';

import './index.less';

export default React.createClass({

  displayName: 'SearchForm',

  propTypes: {
    error: React.PropTypes.string,
    handleSearch: React.PropTypes.func,
    loading: React.PropTypes.bool,
  },

  handleSubmit(e) {
    const { handleSearch } = this.props;
    const q = this.refs.searchTerm.value;
    e.preventDefault();
    handleSearch({
      q,
    });
  },

  render() {
    const { loading, error } = this.props;
    const cx = classNames({
      'search-form': true,
      'error': !!error,
    });
    return (
      <div className={ cx }>
        <form onSubmit={ this.handleSubmit }>
          <div className="label">Criteria</div>
          <input ref="searchTerm" type="text"
              placeholder="Search for songs"
              disabled={ loading } />
          <button type="submit">Search</button>
        </form>
        <div className="error-message" >{ error }</div>
      </div>
    );
  },
});
