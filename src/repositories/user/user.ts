import { IUserData } from '@/entities'
import { APIClient } from '@/network/APIClient'
import { UserAPI } from '@/network/apis/UserAPI'
import { useStores } from '@/stores'
import { IUserRepository } from './user.types'

export class UserRepository implements IUserRepository {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  userStore = useStores().userStore

  async fetchItem(id: number): Promise<IUserData> {
    return await APIClient.shared.request(new UserAPI.Fetch(id))
  }

  saveItem(userData: IUserData): void {
    this.userStore.user = userData
  }

  getItem(): IUserData {
    return this.userStore.user
  }

  clearItem(): void {
    this.userStore.initUser()
  }
}
