import { User } from './user'
import { mockUsersData } from './user.mock'

describe('>>> USER ENTITY', () => {
  describe('>> 유효성 검사', () => {
    it('이메일에 @가 없을 경우 vaildation이 실패합니다.', () => {
      const entity2 = new User({
        ...mockUsersData()[1]
      })
      expect(entity2.validate()).toBeFalsy()
    })
  })
})
