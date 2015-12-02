export const MEDIA_SELECT = 'MEDIA_SELECT';

export function selectMedia(mediaItem) {
  return {
    type: MEDIA_SELECT,
    mediaItem,
  };
}
