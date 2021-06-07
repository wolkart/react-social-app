import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";

export const MyPosts = (props) => {
  const addPost = () => {
    props.onAddPost()
  }

  const updateTextPost = (e) => {
    let text = e.target.value

    props.onUpdateTextPost(text)
  }

  return (
      <div className="MyPosts">
        <div className="MyPosts__header">My posts</div>
        <div className='AddPost'>
          <textarea onChange={updateTextPost} value={props.postText} />
          <button onClick={addPost}>Add post</button>
        </div>
        <PostsList posts={props.posts}/>
      </div>
  )
}