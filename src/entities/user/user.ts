import { USER_EMAIL_REG_EXP } from './user.types'
import {
  IUser,
  IUserData,
  USER_ROLE_TYPE,
  USER_MAX_EMAIL_LENGTH,
  USER_MIN_EMAIL_LENGTH
} from './user.types'

export class User implements IUser {
  role?: USER_ROLE_TYPE | undefined
  email: string
  id: number
  name: string
  phone: string

  constructor(data: IUserData) {
    this.email = data.email
    this.id = data.id
    this.name = data.name
    this.phone = data.phone
  }

  validate(): boolean {
    if (!this.email) return false

    if (this.email.length > USER_MAX_EMAIL_LENGTH || this.email.length < USER_MIN_EMAIL_LENGTH)
      return false

    if (!this.email.match(USER_EMAIL_REG_EXP)) return false

    return true
  }
}
