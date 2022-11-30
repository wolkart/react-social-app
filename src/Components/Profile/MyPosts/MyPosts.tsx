import React, {FC, memo} from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";
import {AddPostFormRedux, NewPostForm} from '../../Forms/AddPostForm';
import {MapDispatchPropsType, MapStateToPropsType} from "./MyPostsContainer";

export const MyPosts: FC<MapStateToPropsType & MapDispatchPropsType> = memo(props => {
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