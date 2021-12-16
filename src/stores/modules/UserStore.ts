import { IUserData } from '@/entities'
import { makeAutoObservable } from 'mobx'

type IStates = {
  user: IUserData
  token: number
}
export class UserStore implements IStates {
  // *** states *****************************************
  public user: IUserData
  public token: number

  // *** init settings **********************************
  constructor() {
    makeAutoObservable(this)
    this.user = this.getInitUser()
    this.token = this.getInitToken()
  }

  private getInitUser(): IUserData {
    return {
      name: '',
      email: '',
      id: -1,
      phone: ''
    }
  }

  private getInitToken(): number {
    return -1
  }

  // *** mutations **************************************
  public updateUser(user: IUserData): void {
    this.user = user
    this.token = user.id
  }

  public initUser(): void {
    // init = delete
    this.user = this.getInitUser()
  }

  // *** computed ***************************************
  get emailAndId() {
    return `${this.user.email}(ID : ${this.user.id})`
  }
}

export default UserStore
