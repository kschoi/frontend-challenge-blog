import { lazy } from 'react'

import AuthRoutes from './auth'
import PostRoutes from './posts'

// import Auth from '../AuthenticationCheck'

// ** Default Route
const DefaultRoute = '/posts'

// ** Merge Routes
const Routes = [
  ...AuthRoutes,
  ...PostRoutes,
  // {
  //   path: '/home',
  //   component: lazy(() => import('../../views/dashboards/home'))
  // },
  // {
  //   path: '/dashboard/analytics',
  //   component: lazy(() => import('../../views/dashboards/statistics'))
  // },
  // {
  //   path: '/login',
  //   component: lazy(() => import('../../views/Login')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     authRoute: true
  //   }
  // },
  {
    path: '/not-found',
    component: lazy(() => import('../../views/errors/NotFound')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, Routes }
