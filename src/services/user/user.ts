import { IUser, IUserData, User } from '@/entities'
import { IUserRepository } from '@/repositories'
import { IUserService } from './user.types'

const idsFromEmail = {
  'alexsando@ssg.com': 1,
  'kschoi@ssg.com': 2,
  'hwangsc@ssg.com': 3,
  'whatsup@ssg.com': 4,
  default: -1
}
export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  getUser(): IUser {
    return new User(this.userRepository.getItem())
  }

  /**
   * # 유저 정보 가져오기
   * 성공시, 유저 정보를 저장하고 반환합니다.
   */
  fetchUser(userId: number): void {
    const email =
      Object.keys(idsFromEmail).find(
        // eslint-disable-next-line eqeqeq
        (key) => idsFromEmail[key as keyof typeof idsFromEmail] == userId
      ) || 'undefined'

    this.userRepository.fetchItem(userId).then((userData: IUserData) =>
      this.userRepository.saveItem({
        ...userData,
        email: email
      })
    )
  }
}
