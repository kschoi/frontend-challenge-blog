import { Post } from './post'
import { mockPostsData } from './post.mock'

describe('>>> POST ENTITY', () => {
  it('>> data가 존재하는 경우, 정상적으로 객체를 생성합니다.', () => {
    const entity = new Post({
      ...mockPostsData()[1]
    })
    expect(entity).not.toBeNull()
  })
})
