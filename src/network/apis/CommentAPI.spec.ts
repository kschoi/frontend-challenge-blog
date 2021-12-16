import { ICommentData } from '@/entities'
import { APIClient } from '../APIClient'
import { CommentAPI } from './CommentAPI'

describe('>>> COMMENT API', () => {
  it('>> 특정 포스트의 코멘트 리스트 가져오기', async () => {
    const postId = 27
    const commentData: ICommentData[] = await APIClient.shared.request(
      new CommentAPI.FetchAll(postId)
    )

    expect(commentData).not.toBeNull()
  })

  it('>> 특정 포스트에 코멘트 등록하기', async () => {
    const postId = 27
    const comment: ICommentData = {
      name: '오동환',
      email: 'whatsup@ssg.com', // 테스트 데이터는 항상 이런 식으로 X
      body: '하하호호호호호호하하하호호호' // 테스트 데이터는 실제와 비슷하게
    }
    await APIClient.shared.request(new CommentAPI.Create(postId, comment)).then(() => {
      expect(true).toBe(true)
    })
  })

  it('>> 코멘트 삭제하기', async () => {
    const postId = 27
    const commentId = 27
    await APIClient.shared.request(new CommentAPI.Delete(postId, commentId)).then(() => {
      expect(true).toBe(true)
    })
  })
})
