import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.alquran.cloud/v1',
  headers: {
    'Content-type': 'application/json',
  },
});

export const quranench = axios.create({
  baseURL: 'https://quranenc.com/api/v1/translation/sura',
  headers: {
    'Content-type': 'application/json',
  },
});

export const equran = axios.create({
  baseURL: 'https://equran.id/api',
  headers: {
    'Content-type': 'application/json',
  },
});
