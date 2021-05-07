import React from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";

export const MyPosts = (props) => {
  return (
    <div className="MyPosts">
      <div className="MyPosts__header">My posts</div>
      <div>
        <textarea ></textarea>
        <button>Add post</button>
      </div>
      <PostsList state={props.state}/>
    </div>
  )
}