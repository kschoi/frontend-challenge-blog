import { ILoginData, IUserData, Login } from '@/entities'
import { ILoginService } from './login.types'
import Cookies from 'js-cookie'
import { IUserRepository, IUserRepositoryMock } from '@/repositories'

const idsFromEmail = {
  'alexsando@ssg.com': 1,
  'kschoi@ssg.com': 2,
  'hwangsc@ssg.com': 3,
  'whatsup@ssg.com': 4,
  default: -1
}
export class LoginService implements ILoginService {
  constructor(private readonly userRepository: IUserRepository | IUserRepositoryMock) {}

  /**
   * # 로그인 시도
   * 성공시, 유저 정보를 저장하고, userID를 반환합니다.
   */
  async loginUser(loginData: ILoginData): Promise<number> {
    if (loginData.password !== 'P@ssw0rd') await Promise.reject('비밀번호 틀림')

    const userId = this.matchIdByFakeEmail(loginData.email)

    console.log(loginData)

    return await this.userRepository.fetchItem(userId).then((userData: IUserData) => {
      this.setToken(userData.id)

      this.userRepository.saveItem({
        ...userData,
        email:
          Object.keys(idsFromEmail).find(
            (key) => idsFromEmail[key as keyof typeof idsFromEmail] === userId
          ) || 'undefined'
      })
      return userData.id
    })
  }

  isValidEmail(loginData: ILoginData): boolean {
    return new Login(loginData).isValidEmail()
  }

  isValidPassword(loginData: ILoginData): boolean {
    return new Login(loginData).isValidPassword()
  }

  private setToken(token: number) {
    Cookies.set('token', token.toString(), { expires: 1 })
  }

  private matchIdByFakeEmail(email: string) {
    return idsFromEmail[email as keyof typeof idsFromEmail] || idsFromEmail.default
  }
}
