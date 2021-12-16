import { useEffect } from 'react'
import { useStores } from '@/stores'
import { ROLES } from '@/ui/acl/permission-maps'

// *** Cookies
import Cookies from 'js-cookie'

function Auth(SpecificComponent, option, adminRoute = null) {
  //SpecificComponent : LandingPage component

  // option: null => 아무나 출입 가능
  // option: true => 로그인 유저만
  // option: false => 로그인 하면 출입 불가능한 곳(회원가입 등...)

  // adminRoute : true이면 admin user만 출입 가능

  // 권한 체크 수행
  function AuthenticationCheck(props) {
    const { userStore } = useStores()
    const { role } = userStore
    // token 가져오기
    const token = Cookies.get('token')
    userStore.token = token

    useEffect(() => {
      if (option === true) {
        if (!token || token < 0) {
          props.history.push('/login')
        }
      }
      if (adminRoute && role === ROLES.ADMIN) {
        props.history.push('/not-authorized')
      }
    }, [])

    return <SpecificComponent {...props} />
  }
  return AuthenticationCheck
}

export default Auth
