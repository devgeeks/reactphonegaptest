import expect from 'expect';
import {
  searchBegun, searchFailed, searchCompleted, RESULTS_LOAD_PENDING,
  RESULTS_LOAD_FAILURE, RESULTS_LOAD_SUCCESS,
} from '../../src/actions/search';

describe('search actions', () => {
  it('should create an action to state that searching has begun', () => {
    const expectedAction = {
      type: RESULTS_LOAD_PENDING
    };
    expect(searchBegun()).toEqual(expectedAction);
  });
  it('should create an action to state that searching has failed', () => {
    const expectedAction = {
      type: RESULTS_LOAD_FAILURE,
      error: 'Search has failed',
    };
    expect(searchFailed('Search has failed')).toEqual(expectedAction);
  });
  it('should create an action to state that searching has completed', () => {
    const searchResults = {
      results: [],
      resultCount: 0
    };
    const expectedAction = {
      type: RESULTS_LOAD_SUCCESS,
      searchResults
    };
    expect(searchCompleted(searchResults)).toEqual(expectedAction);
  });
});

