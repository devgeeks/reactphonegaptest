import { search } from '../utils/iTunesAPIUtils';

export const RESULTS_LOAD_PENDING = 'RESULTS_LOAD_PENDING';
export const RESULTS_LOAD_SUCCESS = 'RESULTS_LOAD_SUCCESS';
export const RESULTS_LOAD_FAILURE = 'RESULTS_LOAD_FAILURE';

export function searchMedia(params) {
  return (dispatch, getState) => {
    if (shouldSearchMedia(getState())) {
      dispatch(searchBegun());
      search(params)
        .then(results => {
          console.log('actions', results);
          dispatch(searchCompleted(results));
        })
        .catch(error => {
          dispatch(searchFailed(error));
          console.error('actions', error);
        });
    }
  }
}

function shouldSearchMedia(state) {
  const { loading } = state.results;
  return !loading;
}

function searchBegun() {
  return {
    type: RESULTS_LOAD_PENDING
  };
}

function searchFailed(error) {
  return {
    type: RESULTS_LOAD_FAILURE,
    error
  };
}

function searchCompleted(results) {
  return {
    type: RESULTS_LOAD_SUCCESS,
    searchResults: results
  };
}
