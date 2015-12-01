import axios from 'axios';

export function search(params) {
  // Some sane defaults, mostly for early dev
  params.term = params.term || 'redux';
  params.explicit = params.explicit || true;
  params.limit = params.limit || 25;
  params.entity = params.entity || 'song';
  return axios.get('https://itunes.apple.com/search', {
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
