// ** React Imports
import { Suspense, lazy } from 'react'

// ** Utils
// import { isUserLoggedIn } from '@/utils'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, Routes } from './modules'

// *** Cookies
import Cookies from 'js-cookie'

// ** 레이아웃
import BlankLayout from '@/ui/@core/layouts/BlankLayout'
import DefaultLayout from '@/ui/@core/layouts/DefaultLayout'

import { useStores } from '@/stores'

import { UserService } from '@/services/user'
import { UserRepository } from '@/repositories'

/**
 *  라우터
 */
const Router = () => {
  // ** 사용 가능한 모든 레이아웃
  const Layouts = { BlankLayout, DefaultLayout }

  // 유저 정보 및 커스텀 정보 가져오기
  const { userStore } = useStores()

  // token 가져오기
  const token = Cookies.get('token')
  userStore.token = token
  userStore.user.id = token

  const userService = new UserService(new UserRepository())
  if (token) userService.fetchUser(token)

  const NotAuthorized = lazy(() => import('@/ui/views/errors/NotAuthorized'))
  const NotFound = lazy(() => import('@/ui/views/errors/NotFound'))

  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      // eslint-disable-next-line array-callback-return
      Routes.filter((route) => {
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** 레이아웃 경로와 라우트를 가져옵니다.
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)

      const routerProps = {}

      return (
        <Route path={LayoutPaths} key={index}>
          {layout === 'DefaultLayout' ? (
            <DefaultLayout>
              <Switch>
                {LayoutRoutes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact === true}
                      render={(props) => {
                        // ** routerProps에 props를 할당합니다.
                        Object.assign(routerProps, {
                          ...props,
                          meta: route.meta
                        })

                        return (
                          <Suspense fallback={null}>
                            <div>
                              <route.component {...props} />
                            </div>
                          </Suspense>
                        )
                      }}
                    />
                  )
                })}
              </Switch>
            </DefaultLayout>
          ) : (
            <BlankLayout>
              <Switch>
                {LayoutRoutes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact === true}
                      render={(props) => {
                        // ** routerProps에 props를 할당합니다.
                        Object.assign(routerProps, {
                          ...props,
                          meta: route.meta
                        })

                        return (
                          <Suspense fallback={null}>
                            <div>
                              <route.component {...props} />
                            </div>
                          </Suspense>
                        )
                      }}
                    />
                  )
                })}
              </Switch>
            </BlankLayout>
          )}
        </Route>
      )
    })
  }

  return (
    <AppRouter>
      {/* {userStore.name.length === 0 ? (
        <div>hello</div>
      ) : ( */}
      <Switch>
        {/* 사용자가 로그인 한 경우 사용자를 DefaultRoute 로 리디렉션하고 그렇지 않으면 로그인합니다. */}
        <Route
          exact
          path="/"
          render={() => {
            return userStore.user.id > 0 ? (
              <Redirect to={DefaultRoute} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }}
        />

        {/* Not Auth Route */}
        <Route
          exact
          path="/not-authorized"
          render={(props) => (
            <Layouts.BlankLayout>
              <NotAuthorized />
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}
        {/* NotFound 페이지 */}
        <Route
          path="*"
          render={(props) => (
            <Layouts.BlankLayout>
              <NotFound />
            </Layouts.BlankLayout>
          )}
        />
      </Switch>
      {/* )} */}
    </AppRouter>
  )
}

export default Router
