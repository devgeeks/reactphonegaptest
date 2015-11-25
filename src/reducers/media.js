import {
  MEDIA_LOAD_PENDING, MEDIA_LOAD_SUCCESS, MEDIA_LOAD_FAILURE,
} from '../actions/media';

const initialState = {
  loading: false,
  error: '',
  mediaItem: {},
};

export function media(state = initialState, action) {
  switch (action.type) {
    case MEDIA_LOAD_PENDING:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case MEDIA_LOAD_SUCCESS:
      return {
        ...state,
        error: '',
        mediaItem: action.mediaItem,
      };
    case MEDIA_LOAD_FAILURE:
      return {
        ...state,
        mediaItem: {},
        error: action.error,
      };
    default:
      return state
  }
}

