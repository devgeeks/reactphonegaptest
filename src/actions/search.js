import { search } from 'utils/spotifyAPIUtils';
// import { search } from 'utils/iTunesAPIUtils';

export const RESULTS_LOAD_PENDING = 'RESULTS_LOAD_PENDING';
export const RESULTS_LOAD_SUCCESS = 'RESULTS_LOAD_SUCCESS';
export const RESULTS_LOAD_FAILURE = 'RESULTS_LOAD_FAILURE';

function shouldSearchMedia(state) {
  const { loading } = state.results;
  return !loading;
}

export function searchBegun() {
  return {
    type: RESULTS_LOAD_PENDING,
  };
}

export function searchFailed(error) {
  return {
    type: RESULTS_LOAD_FAILURE,
    error,
  };
}

export function searchCompleted(results) {
  return {
    type: RESULTS_LOAD_SUCCESS,
    searchResults: results,
  };
}

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
  };
}
