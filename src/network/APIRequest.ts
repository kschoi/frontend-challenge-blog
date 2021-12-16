import { HTTPMethod } from '@/network/APIClient'

export type APIRequest<R> = {
  response: R // 응답을 지정합니다.
  path: string
  method: HTTPMethod // GET, POST, PUT, DELETE
  params?: any // GET -> url params / POST,PUT,DELETE -> body
  baseURL?: string // baseURL 변경이 필요한 경우에만 사용합니다.
  /**
   * https://medium.com/@bojanmajed/standard-json-api-response-format-c6c1aabcaa6d
   * https://sanghaklee.tistory.com/61
   * https://yamoo9.github.io/axios/guide/response-schema.html
   * response에 붙일 부분을 response 로부터 떼어냅니다.
   */
  parse?: (data: any) => R
  header?: any // 헤더에 더 추가할 것이 있을 때 사용
}
