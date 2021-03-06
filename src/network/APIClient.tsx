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

  // URL μ€μ 
  baseDomain = process.env.REACT_APP_BASE_API_URL
  baseURL = `${this.baseDomain}`

  // Timeout μ€μ 
  timeout: number = 15 * 1000

  request<T extends IApiResponse>(request: APIRequest<T>): Promise<T> {
    const isRead = request.method === HTTPMethod.GET

    console.log(`=======================================`)
    console.log(`π API μμ²­ : ${request.path}`)
    console.log('π params :', request.params)

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

          // λλ²κΉμ©
          console.log('π API μλ΅ :', response)
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

  // axios error λ₯Ό μ°λ¦¬κ° μ μν APIError λ‘ λ³ν
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
