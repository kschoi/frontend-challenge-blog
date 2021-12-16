import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest'
import { HTTPMethod } from '@/network/APIClient'
import { IPostData } from '@/entities'

export namespace PostAPI {
  // 베이스
  const POSTS = 'posts'

  /**
   * 리스트 가져오기 가져오기
   * ex1) no pagination : fetch all
   * ex2) pagination : fetch data in page
   */
  export class FetchAll implements APIRequest<IPostData[]> {
    response!: IPostData[]
    path = POSTS
    params?: IPaginationRequest
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(params?: IPaginationRequest) {
      if (params) this.params = params
    }
  }
}
