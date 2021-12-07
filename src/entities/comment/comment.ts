import { IComment, ICommentData } from './comment.types'
import { getRandomBoolean, getRandomDate } from '@/utils/faker'

export class Comment implements IComment {
  isHidden: boolean
  isBlocked: boolean
  createdDate: string
  postId: number
  id: number
  name: string
  email: string
  body: string

  constructor(data: ICommentData) {
    this.postId = data.postId
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.body = data.body

    // ** 스터디를 위해 API 에서 오지 않은 도메인 속성에 대해 랜덤값을 할당한 것으로,
    // ** 일반적으로 이런식으로 랜덤값을 할당하게 되는 일은 거의 없습니다.
    this.isHidden = getRandomBoolean()
    this.isBlocked = getRandomBoolean()
    this.createdDate = getRandomDate()
  }

  validate(): boolean {
    throw new Error('Method not implemented.')
  }
}
