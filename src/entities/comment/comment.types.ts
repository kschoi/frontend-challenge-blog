export interface ICommentData {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IComment extends ICommentData {
  isHidden: boolean
  isBlocked: boolean
  createdDate: string
  validate(): boolean
}

export const COMMENT_MAX_NAME_LENGTH = 40
export const COMMENT_MIN_NAME_LENGTH = 20
export const COMMENT_MAX_BODY_LENGTH = 200
export const COMMENT_MIN_BODY_LENGTH = 20
