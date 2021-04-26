import React from 'react'
import './PostsList.scss'
import {PostItem} from "./PostItem/PostItem";

export const PostsList = () => {
  return (
      <div className="PostsList">
        <PostItem message="Hi, how are you?" like={10}/>
        <PostItem message={`My name is Artem!`} like={75}/>
      </div>
  )
}