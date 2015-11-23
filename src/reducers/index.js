import { combineReducers } from 'redux';

import { search} from './search';
import { media } from './media';

const combinedReducer = combineReducers({
  media,
  search,
});

export default combinedReducer;
