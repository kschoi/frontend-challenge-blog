import { ILogin, ILoginData } from './login.types'
import { Login } from './login'

export const mockLoginsData = (): ILoginData[] => [
  // 유효성 실패 - email
  {
    email: 'aboutdh89aboutdh89aboutdh89aboutdh89aboutdh89aboutdh89aboutdh89naver.com',
    password: 'P@ssw0rd'
  },
  {
    email: 'aboutdh89&naver.com',
    password: 'P@ssw0rd'
  },
  // 유효성 실패 - password
  {
    email: 'aboutdh89@naver.com',
    password: '01058753636'
  },
  {
    email: 'aboutdh89@naver.com',
    password: 'P@ssword'
  },
  // 정상
  {
    email: 'alexsando@ssg.com',
    password: 'P@ssw0rd'
  },
  {
    email: 'kschoi@ssg.com',
    password: 'P@ssw0rd'
  },
  {
    email: 'hwangsc@ssg.com',
    password: 'P@ssw0rd'
  },
  {
    email: 'whatsup@ssg.com',
    password: 'P@ssw0rd'
  }
]

export const mockLogins = (data: ILoginData[] = mockLoginsData()): ILogin[] =>
  data.map((item) => new Login(item))
