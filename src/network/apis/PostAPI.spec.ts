import { IPostData } from '@/entities'
import { APIClient } from '../APIClient'
import { PostAPI } from './PostAPI'

describe('>>> POST API', () => {
  it('>> 리스트 가져오기', async () => {
    const pagination: IPaginationRequest = { _page: 7, _limit: 4 }
    const postData: IPostData[] = await APIClient.shared.request(new PostAPI.FetchAll(pagination))

    expect(postData.length).toBe(4)
  })

  it('>> 하나 가져오기', async () => {
    const postId = 27
    const postData: IPostData = await APIClient.shared.request(new PostAPI.FetchOne(postId))

    expect(postData).not.toBeNull()
  })

  // post 검증, 예를 들어 title 길이와 같은 테스트는 여기서 해야 될까?
  it('>> 등록하기', async () => {
    const post: IPostData = {
      userId: 2,
      title: '안녕하세요', // 테스트 데이터는 항상 이런 식으로 X
      body: '하하호호호호호호' // 테스트 데이터는 실제와 비슷하게
    }
    await APIClient.shared.request(new PostAPI.Create(post)).then(() => {
      expect(true).toBe(true)
    })
  })

  it('>> 수정하기', async () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const partialPost = <IPostData>{}
    partialPost.title = '하하하'
    await APIClient.shared.request(new PostAPI.Update(partialPost)).then(() => {
      expect(true).toBe(true)
    })
  })

  it('>> 삭제하기', async () => {
    const postId = 27
    await APIClient.shared.request(new PostAPI.Delete(postId)).then(() => {
      expect(true).toBe(true)
    })
  })
})
