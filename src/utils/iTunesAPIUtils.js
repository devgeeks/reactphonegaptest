import axios from 'axios';

export function search(params) {
  return axios.get('https://itunes.apple.com/search', {
    params: params
  })
  .then(response => {
    console.log('utils', response);
    if (response.status != 200) {
      return Promise.reject(`${response.status} ${response.statusText}`);
    } else {
      return Promise.resolve(response.data);
    }
  })
  .catch(response => {
    console.log('utils', response);
    return Promise.reject({
      status: response.status,
      statusText: response.statusText
    });
  });
}
