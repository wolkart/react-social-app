import React, {FC, memo} from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";
import {AddPostFormRedux, NewPostForm} from '../../Forms/AddPostForm';
import {PostType} from "../../../types/types";

type PropsType = {
    posts: PostType[]
    addNewPost: (value: string) => void
}

export const MyPosts: FC<PropsType> = memo(props => {
  const onAddPost = (values: NewPostForm) => {
    props.addNewPost(values.newPost)
  }

  return (
    <div className="MyPosts">
      <div className="MyPosts__header">My posts</div>
      <div className='AddPost'>
        <AddPostFormRedux onSubmit={onAddPost}/>
      </div>
      <PostsList posts={props.posts}/>
    </div>
  )
})