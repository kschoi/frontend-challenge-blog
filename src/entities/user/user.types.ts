export enum USER_ROLE_TYPE {
  EDITOR = 'editor',
  USER = 'user'
}

export interface IUserData {
  email: string
  id: number
  name: string
  phone: string
}

export interface IUser extends IUserData {
  role?: USER_ROLE_TYPE
  validate(): boolean
}

// 유저 관련 규칙
export const USER_EMAIL_REG_EXP = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
export const USER_MIN_EMAIL_LENGTH = 10
export const USER_MAX_EMAIL_LENGTH = 50
