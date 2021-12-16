import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest'
import { HTTPMethod } from '@/network/APIClient'
import { IUserData } from '@/entities'

export namespace UserAPI {
  // 베이스
  const USERS = 'users'

  /**
   * 유저정보 가져오기
   * user/{id}
   */
  export class Fetch implements APIRequest<IUserData> {
    response!: IUserData
    path = USERS
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(id: number) {
      this.path = this.path.concat(`/${id}`)
    }
  }
}
