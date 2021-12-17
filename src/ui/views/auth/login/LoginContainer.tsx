import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginService } from '@/services/login'
import { UserRepository } from '@/repositories'
import Login from './LoginPresenter'
import { ILoginData } from '@/entities'

function LoginContainer() {
  // *** states
  const [login, setLogin] = useState<ILoginData>({ email: '', password: '' })
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

  const history = useHistory()
  const service = new LoginService(new UserRepository())

  // *** effects
  useEffect(() => {}, [])

  // 자식에게 전달하는 이벤트의 경우, handlers에 모은다.
  const handlers = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
      service
        .loginUser(login)
        .then(() => {
          history.push('/posts')
        })
        .catch(() => alert('로그인 정보가 없습니다.'))
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target
      setLogin({ ...login, [name]: value })
      setIsEmailValid(service.isValidEmail(login))
      setIsPasswordValid(service.isValidPassword(login))
    }
  }

  // *** renders
  return (
    <>
      <Login
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        onSubmit={handlers.onSubmit}
        onChange={handlers.onChange}
      />
    </>
  )
}

export default LoginContainer
