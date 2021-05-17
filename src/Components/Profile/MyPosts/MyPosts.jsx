import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";

export const MyPosts = (props) => {
  const newPostElem = React.createRef()

  const addPost = () => {
    let text = newPostElem.current.value

    props.addPost(text)
  }

  return (
      <div className="MyPosts">
        <div className="MyPosts__header">My posts</div>
        <div className='AddPost'>
          <textarea ref={newPostElem}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
        <PostsList state={props.state}/>
      </div>
  )
}