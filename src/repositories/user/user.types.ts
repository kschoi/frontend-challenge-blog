import { IUserData } from '@/entities'

export type IUserRepository = {
  fetchItem: (id: number) => Promise<IUserData>
  saveItem: (userData: IUserData) => void
  getItem: () => IUserData
  clearItem: () => void
}

export type IUserRepositoryMock = {
  fetchItem: jest.Mock<Promise<IUserData>>
  saveItem: jest.Mock<Promise<IUserData>>
  getItem: jest.Mock<IUserData>
  clearItem: jest.Mock<void>
}
