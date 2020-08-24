/* eslint-disable no-console */

import { register } from 'register-service-worker'

register(
  './service-worker.js',
  { scope: '/' },
  {
    ready() {
      console.log('[msxSW] App is being served from cache by a service worker.')
    },
    registered() {
      console.log('[msxSW] Service worker has been registered.')
    },
    cached() {
      console.log('[msxSW] Content has been cached for offline use.')
    },
    updatefound() {
      console.log('[msxSW] New content is downloading.')
    },
    updated() {
      console.log('[msxSW] New content is available; please refresh.')
    },
    offline() {
      console.log(
        '[msxSW] No internet connection found. App is running in offline mode.'
      )
    },
    error(error) {
      console.error('[msxSW] Error during service worker registration:', error)
    },
  }
)
