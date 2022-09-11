import React from 'react'
import './PostItem.scss'

export const PostItem = (props) => {
  return (
      <div className="PostItem">
        <div className="PostItem__ava">
          <img src="https://cs13.pikabu.ru/avatars/2729/x2729750-428926448.png" alt=""/>
        </div>
        <span className="PostItem__message">{props.message}</span>
        <span className="PostItem__like">Like {props.like }</span>
      </div>
  )
}