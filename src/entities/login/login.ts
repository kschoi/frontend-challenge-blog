import {
  ILogin,
  ILoginData,
  LOGIN_EMAIL_REG_EXP,
  LOGIN_MAX_EMAIL_LENGTH,
  LOGIN_MIN_EMAIL_LENGTH,
  LOGIN_PASSWORD_REG_EXP
} from './login.types'

export class Login implements ILogin {
  email: string
  password: string

  constructor(data: ILoginData) {
    this.email = data.email
    this.password = data.password
  }

  isValidEmail(): boolean {
    if (!this.email) return false

    if (this.email.length > LOGIN_MAX_EMAIL_LENGTH || this.email.length < LOGIN_MIN_EMAIL_LENGTH)
      return false

    if (!this.email.match(LOGIN_EMAIL_REG_EXP)) return false

    return true
  }

  isValidPassword(): boolean {
    return this.password.match(LOGIN_PASSWORD_REG_EXP) ? true : false
  }
}
