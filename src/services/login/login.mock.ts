import { ILoginServiceMock } from './login.types'

export const mockUserService = (): ILoginServiceMock => ({
  loginUser: jest.fn(),
  isValidEmail: jest.fn(),
  isValidPassword: jest.fn()
})
