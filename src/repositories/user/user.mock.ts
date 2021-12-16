import { mockUsersData } from '@/entities'
import { IUserRepositoryMock } from './user.types'

export const mockUserRepository = (): IUserRepositoryMock => ({
  fetchItem: jest.fn().mockResolvedValue(mockUsersData()[2]),
  saveItem: jest.fn(),
  getItem: jest.fn().mockReturnValue(mockUsersData()[2]),
  clearItem: jest.fn()
})
