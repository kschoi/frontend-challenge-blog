import { IComment, ICommentData } from './comment.types'
import { Comment } from './comment'

export const mockCommentsData = (): ICommentData[] => [
  {
    postId: 27,
    id: 132,
    name: 'unde tenetur vero eum iusto',
    email: 'Megane.Fritsch@claude.name',
    body:
      'ullam harum consequatur est rerum est\nmagni tenetur aperiam et\nrepudiandae et reprehenderit dolorum enim voluptas impedit\neligendi quis necessitatibus in exercitationem voluptatem qui'
  },
  {
    postId: 27,
    id: 133,
    name: 'est adipisci laudantium amet rem asperiores',
    email: 'Amya@durward.ca',
    body:
      'sunt quis iure molestias qui ipsa commodi dolore a\nodio qui debitis earum\nunde ut omnis\ndoloremque corrupti at repellendus earum eum'
  }
]

export const mockComments = (data: ICommentData[] = mockCommentsData()): IComment[] => {
  return data.map((item) => new Comment(item))
}
