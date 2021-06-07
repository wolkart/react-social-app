import React from 'react'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
  let state = props.store.getState()

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const onUpdateTextPost = (text) => {
    props.store.dispatch(updateTextPostActionCreator(text))
  }

  return <MyPosts
      onAddPost={onAddPost}
      onUpdateTextPost={onUpdateTextPost}
      posts={state.profilePage.posts}
      postText={state.profilePage.textPost}
  />
}