import { mockUserRepository } from './user.mock'
import { IUserRepositoryMock } from './user.types'

describe('>>> USER REPOSITORY (FAKE test)', () => {
  it('>> fetchItem', async () => {
    const repository: IUserRepositoryMock = mockUserRepository()

    await repository.fetchItem().then((result) => {
      expect(result.id).toBe(1)
    })
  })
})
