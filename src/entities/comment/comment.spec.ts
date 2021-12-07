import { Comment } from './comment'
import { mockCommentsData } from './comment.mock'

describe('>>> COMMENT ENTITY', () => {
  it('>> data가 존재하는 경우, 정상적으로 객체를 생성합니다.', () => {
    const entity = new Comment({
      ...mockCommentsData()[1]
    })
    expect(entity).not.toBeNull()
  })
})
