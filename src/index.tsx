import { Suspense, lazy } from 'react'

import React from 'react'
import ReactDOM from 'react-dom'

import '@/ui/@core/scss/index.css'

// ** Lazy load app
const LazyApp = lazy(() => import('./ui/App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
