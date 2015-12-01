import {
  MEDIA_SELECT,
  // MEDIA_LOAD_PENDING, MEDIA_LOAD_SUCCESS, MEDIA_LOAD_FAILURE,
} from '../actions/media';

export function media(state = {}, action) {
  switch (action.type) {
  case MEDIA_SELECT:
    return action.mediaItem;
  default:
    return state;
  }
}
