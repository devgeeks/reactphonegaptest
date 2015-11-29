import expect from 'expect'
import { MEDIA_SELECT, selectMedia } from '../../../src/actions/media'

describe('media actions', () => {
  it('should create an action to select a media item', () => {
    const mediaItem = {
      artistName: 'Bad Day Down',
      trackCensoredName: 'Biting the Hand that Feeds',
    };
    const expectedAction = {
      type: MEDIA_SELECT,
      mediaItem,
    };
    expect(selectMedia(mediaItem)).toEqual(expectedAction);
  });
});
