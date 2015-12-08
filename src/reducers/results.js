import {
  RESULTS_LOAD_PENDING, RESULTS_LOAD_SUCCESS, RESULTS_LOAD_FAILURE,
} from '../actions/search';

const initialState = {
  loading: false,
  error: '',
  searchResults: {
    resultCount: 0,
    results: [],
  },
};

export function results(state = initialState, action) {
  switch (action.type) {
  case RESULTS_LOAD_PENDING:
    return {
      ...state,
      searchResults: initialState.searchResults, // reset
      loading: true,
      error: '',
    };
  case RESULTS_LOAD_SUCCESS:
    // Crazy destructuring assignment
    const { tracks: { items: resultItems } } = action.searchResults;
    return {
      ...state,
      error: '',
      loading: false,
      // This seems odd, but for the moment we only want the tracks result
      // Later on, we might filter this at the API level, etc
      searchResults: {
        resultCount: resultItems.length,
        results: resultItems, // action.searchResults.tracks.items,
      },
    };
  case RESULTS_LOAD_FAILURE:
    console.log(action);
    return {
      ...state,
      searchResults: initialState.searchResults, // reset
      loading: false,
      error: action.error,
    };
  default:
    return state;
  }
}
