import { mockLoginsData } from '@/entities'
import { LoginService } from './login'
import { mockUserRepository } from '@/repositories'

describe('>>> Login Service', () => {
  describe('>> loginUser 메소드', () => {
    it('alexsando@ssg.com / P@ssw0rd 로 로그인시, userID 1을 사용합니다.', async () => {
      const userRepository = mockUserRepository()
      const service = new LoginService(userRepository)

      const userData = mockLoginsData()[4]
      await service.loginUser(userData).then((userID: number) => {
        expect(userID).toBe(1)
      })
    })
  })
})
