import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";

export const MyPosts = (props) => {
  const newPostElem = React.createRef()

  const updateTextPost = () => {
    let text = newPostElem.current.value
    props.updateNewTextPost(text)
  }

  return (
      <div className="MyPosts">
        <div className="MyPosts__header">My posts</div>
        <div className='AddPost'>
          <textarea ref={newPostElem} onChange={updateTextPost} value={props.profilePage.textPost} />
          <button onClick={props.addPost}>Add post</button>
        </div>
        <PostsList profilePage={props.profilePage}/>
      </div>
  )
}