import { lazy } from 'react'
import Auth from '@/ui/acl/Auth'

const AuthRoutes = [
  {
    layout: 'BlankLayout',
    path: '/auth/login',
    component: Auth(
      lazy(() => import('@/ui/views/auth/login')),
      null
    )
  }
]

export default AuthRoutes
