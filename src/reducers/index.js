import { combineReducers } from 'redux';

import { results } from './results';
import { media } from './media';

const combinedReducer = combineReducers({
  media,
  results,
});

export default combinedReducer;
