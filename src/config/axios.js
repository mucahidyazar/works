import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  // minutes seconds milliseconds
  maxAge: 60 * 60 * 1000
});

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=C0aYRiqVfrlAZDgu3twEJXsHfpWT3Aa5
// ignore eslint below
// Create `axios` instance passing the newly created `cache.adapter`
export const api = axios.create({
  adapter: cache.adapter,
  baseURL: 'https://api.nytimes.com/svc/search/v2'
});
