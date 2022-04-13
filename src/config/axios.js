import axios from 'axios'
import {setupCache} from 'axios-cache-adapter'

// Create `axios-cache-adapter` instance
const cache = setupCache({
  // minutes seconds milliseconds
  maxAge: 60 * 60 * 1000,
})

// Create `axios` instance passing the newly created `cache.adapter`
export const api = axios.create({
  adapter: cache.adapter,
  baseURL: 'https://api-dev.smartgiftit.com/apps/products',
  headers: {
    'x-smartgift-app-id': 'zOdeE81mInZIiPLrdHRd0IVZ1a2vv42p6tvh8SX3',
    'x-smartgift-app-secret': 'ldPn67Cf7e0NboidnQ30KTtrfD1nqPpoSqs69EfH',
  },
})
