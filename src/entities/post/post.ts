import { IPostData, IPost, CATEGORY_TYPE } from './post.types'
import { getRandomBoolean, getRandomDate, getRandomCategoryType } from '@/utils/faker'
export class Post implements IPost {
  createdDate: string
  isLock: boolean
  category: CATEGORY_TYPE
  userId: number
  id: number
  title: string
  body: string

  constructor(data: IPostData) {
    this.userId = data.userId
    this.id = data.id
    this.title = data.title
    this.body = data.body

    // ** 스터디를 위해 API 에서 오지 않은 도메인 속성에 대해 랜덤값을 할당한 것으로,
    // ** 일반적으로 랜덤값을 할당하게 되는 일은 거의 없습니다.
    this.createdDate = getRandomDate()
    this.isLock = getRandomBoolean()
    this.category = getRandomCategoryType()
  }

  validate(): boolean {
    throw new Error('Method not implemented.')
  }
}
