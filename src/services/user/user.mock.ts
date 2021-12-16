import { IUserServiceMock } from './user.types'

export const mockUserService = (): IUserServiceMock => ({
  loginUser: jest.fn(),
  getUser: jest.fn()
})
