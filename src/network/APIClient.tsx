import axios from 'axios'
import { IApiResponse } from './APIResponse'
import { APIRequest } from './APIRequest'
import { IApiError } from './APIError'

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

export class APIClient {
  static shared = new APIClient()

  // URL 설정
  baseDomain = process.env.REACT_APP_BASE_API_URL
  baseURL = `${this.baseDomain}`

  // Timeout 설정
  timeout: number = 15 * 1000

  request<T extends IApiResponse>(request: APIRequest<T>): Promise<T> {
    const isRead = request.method === HTTPMethod.GET

    console.log(`=======================================`)
    console.log(`🎉 API 요청 : ${request.path}`)
    console.log('🎉 params :', request.params)

    return new Promise<T>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && request.params,
          withCredentials: true,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: APIClient.createHeaders()
        })
        .then((result) => {
          // console.log(request)
          const response = request.parse ? request.parse(result) : APIClient.parse<T>(result)

          // 디버깅용
          console.log('🎉 API 응답 :', response)
          console.log(`=======================================`)

          resolve(response)
        })
        .catch((err) => {
          const apiError = APIClient.normalizeError(err)

          reject(apiError)
        })
    })
  }

  // Default parser
  private static parse<T extends IApiResponse>(data: any): T {
    return data
  }

  // axios error 를 우리가 정의한 APIError 로 변환
  private static normalizeError(error: any): IApiError {
    return {
      code: error.response && error.response.status,
      message: error.message,
      raw: error
    }
  }

  // Create headers
  private static createHeaders(): any {
    return {
      'Content-Type': 'application/json'
    }
  }
}
