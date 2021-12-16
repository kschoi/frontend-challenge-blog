import { IUser, IUserData } from './user.types'
import { User } from './user'

export const mockUsersData = (): IUserData[] => [
  {
    id: 1,
    name: '오동환',
    email: 'aboutdh89@naver.com',
    phone: '01058753636'
  },
  {
    id: 2,
    name: '최경선',
    email: 'kyungsungmail.com',
    phone: '01012344321'
  },
  {
    id: 1,
    name: '육선도',
    email: 'alexsando@ssg.com',
    phone: 'P@ssw0rd'
  }
]

export const mockUsers = (data: IUserData[] = mockUsersData()): IUser[] =>
  data.map((item) => new User(item))
