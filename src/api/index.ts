import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 1000,
});

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

const get = (url: string, query?: object, options?: object) =>
  instance.get(url, {
    params: {
      ...query,
      ...baseQueryParams,
    },
    ...options,
  });

export { instance as api, get };
