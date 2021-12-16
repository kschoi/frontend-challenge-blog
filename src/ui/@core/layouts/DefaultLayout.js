// ** React Imports
import { useEffect, useState } from 'react'

import { observer } from 'mobx-react'

import logo from '@/ui/@core/assets/images/logo/logo.png'
import { useStores } from '@/stores'
import { useNavigate } from 'react-router-dom'

import Cookies from 'js-cookie'

const DefaultLayout = ({ children, ...rest }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)

  // react에서 context에 대한 문서에 의하여,
  // 전역적 데이터 중 어떤 서비스 측면이 아니라 사용자, 테마, 선호되는 언어 등,
  // 서비스가 아닌 전역적이라 여겨질만한 것들에 대하여는 직접 처리할 때는 스토어로 호출한다.
  const { userStore } = useStores()
  const navigate = useNavigate()

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* 네비게이션. 추후 분리 */}
      <nav className="text-white p-2 border-b-1 border-gray-400">
        <ul className="container mx-auto flex justify-between items-center">
          <li className="mr-6">
            <img src={logo} alt="logo" style={{ height: '36px' }} />
          </li>
          <div className="flex">
            <li className="mr-6">
              <a className="text-dark hover:text-primary no-underline cursor-pointer">
                {userStore.emailAndId}
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-dark hover:text-primary no-underline cursor-pointer"
                onClick={() => {
                  Cookies.remove('token')
                  navigate('/auth/login')
                }}>
                로그아웃
              </a>
            </li>
          </div>
        </ul>
      </nav>

      {/* 콘텐츠 영역 */}
      <div className="container mx-auto p-1">{children}</div>
    </>
  )
}

export default observer(DefaultLayout)
