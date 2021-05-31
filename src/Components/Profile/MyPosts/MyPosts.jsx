import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/state";

export const MyPosts = (props) => {
  const newPostElem = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const updateTextPost = () => {
    let text = newPostElem.current.value

    props.dispatch(updateTextPostActionCreator(text))
  }

  return (
      <div className="MyPosts">
        <div className="MyPosts__header">My posts</div>
        <div className='AddPost'>
          <textarea ref={newPostElem} onChange={updateTextPost} value={props.profilePage.textPost} />
          <button onClick={addPost}>Add post</button>
        </div>
        <PostsList profilePage={props.profilePage}/>
      </div>
  )
}