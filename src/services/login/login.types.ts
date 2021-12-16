import { ILoginData } from '@/entities'

export interface ILoginService {
  loginUser(loginData: ILoginData): Promise<number>
  isValidEmail(loginData: ILoginData): boolean
  isValidPassword(loginData: ILoginData): boolean
}

export interface ILoginServiceMock {
  loginUser: jest.Mock<Promise<number>>
  isValidEmail: jest.Mock<boolean>
  isValidPassword: jest.Mock<boolean>
}
