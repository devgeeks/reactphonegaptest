import axios from 'axios';

export function search(params) {
  // Some sane defaults, mostly for early dev
  params.q = params.q || 'redux';
  params.type = params.type || 'artist,album,track';
  params.limit = params.limit || '25';
  return axios.get('https://api.spotify.com/v1/search', {
    params: params,
  })
  .then(response => {
    if (response.status !== 200) {
      return Promise.reject(`${response.status} ${response.statusText}`);
    }
    return Promise.resolve(response.data);
  })
  .catch(response => {
    console.log('utils', response);
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
    });
  });
}
