export interface ILoginData {
  email: string
  password: string
}

export interface ILogin extends ILoginData {
  isValidEmail(): boolean
  isValidPassword(): boolean
}

// 로그인 관련 규칙 - 이메일
export const LOGIN_EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
export const LOGIN_MIN_EMAIL_LENGTH = 10
export const LOGIN_MAX_EMAIL_LENGTH = 50

// 로그인 관련 규칙 - 비밀번호
export const LOGIN_PASSWORD_REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/i

// 이 속성이 있을 경우, 저 속성이 반드시 있어야 한다던지
