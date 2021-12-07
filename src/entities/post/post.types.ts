export enum CATEGORY_TYPE {
  DEVELOPMENT = 'development',
  NOTICE = 'notice'
}

export interface IPostData {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPost extends IPostData {
  createdDate: string
  isLock: boolean
  category: CATEGORY_TYPE
  validate(): boolean
}

export const POST_MAX_TITLE_LENGTH = 100
export const POST_MIN_TITLE_LENGTH = 20
export const POST_MAX_BODY_LENGTH = 5000
export const POST_MIN_BODY_LENGTH = 20
