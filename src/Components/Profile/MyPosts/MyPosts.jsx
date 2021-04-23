import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";

export const MyPosts = () => {
  return (
    <div className="MyPosts">
      <div className="MyPosts__header">My posts</div>
      <PostsList/>
    </div>
  )
}