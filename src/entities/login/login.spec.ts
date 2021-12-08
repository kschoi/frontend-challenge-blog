import { Login } from './login'
import { mockLogins, mockLoginsData } from './login.mock'

const loginsToTest = mockLogins()

describe('>>> USER ENTITY', () => {
  it('>> data가 존재하는 경우, 정상적으로 객체를 생성합니다.', () => {
    const entity = new Login({
      ...mockLoginsData()[1]
    })
    expect(entity).not.toBeNull()
  })

  describe('>> 유효성 검사 >> 이메일', () => {
    it('이메일에 @가 없을 경우 vaildation이 실패합니다.', () => {
      const entity = loginsToTest[1]
      expect(entity.isValidEmail()).toBeFalsy()
    })

    it('이메일이 50자가 넘을 경우 vaildation이 실패합니다.', () => {
      const entity = loginsToTest[0]
      expect(entity.isValidEmail()).toBeFalsy()
    })
  })

  describe('>> 유효성 검사 >> 비밀번호', () => {
    it('비밀번호가 10자 이상인 경우 validation이 실패합니다.', () => {
      const entity = loginsToTest[2]
      expect(entity.isValidPassword()).toBeFalsy()
    })

    it('비밀번호에 숫자가 없을 경우 vaildation이 실패합니다.', () => {
      const entity = loginsToTest[3]
      expect(entity.isValidPassword()).toBeFalsy()
    })
  })
})
