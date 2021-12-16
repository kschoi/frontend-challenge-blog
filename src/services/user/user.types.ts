import { IUser, IUserData } from '@/entities'

export interface IUserService {
  getUser(): IUser
}

export interface IUserServiceMock {
  loginUser: jest.Mock<Promise<any>>
  getUser: jest.Mock<IUserData>
}
