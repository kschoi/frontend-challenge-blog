import { UserRepository } from '@/repositories'
import { UserService } from '@/services/user'
import PostListPresenter from './PostListPresenter'

function PostListContatiner() {
  const userService = new UserService(new UserRepository())
  console.log(userService.getUser())

  return <PostListPresenter />
}

export default PostListContatiner
