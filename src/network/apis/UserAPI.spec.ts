import { IUserData } from '@/entities'
import { APIClient } from '../APIClient'
import { UserAPI } from './UserAPI'

describe('>>> USER API', () => {
  it('>> Fetch', async () => {
    const userData: IUserData = await APIClient.shared.request(new UserAPI.Fetch(1))
    expect(userData.name).toBe('Leanne Graham')
  })
})
