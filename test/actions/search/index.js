import expect from 'expect'
import * as actions from '../../../src/actions/search'

describe('search actions', () => {
  it('should create an action to state that searching has begun', () => {
    const expectedAction = {
      type: actions.RESULTS_LOAD_PENDING
    };
    expect(actions.searchBegun()).toEqual(expectedAction);
  });
  it('should create an action to state that searching has failed', () => {
    const expectedAction = {
      type: actions.RESULTS_LOAD_FAILURE,
      error: 'Search has failed',
    };
    expect(actions.searchFailed('Search has failed')).toEqual(expectedAction);
  });
  it('should create an action to state that searching has completed', () => {
    const searchResults = {
      results: [],
      resultCount: 0
    };
    const expectedAction = {
      type: actions.RESULTS_LOAD_SUCCESS,
      searchResults
    };
    expect(actions.searchCompleted(searchResults)).toEqual(expectedAction);
  });
});

