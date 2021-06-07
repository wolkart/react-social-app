import React from 'react'
import './PostsList.scss'
import {PostItem} from "./PostItem/PostItem";

export const PostsList = (props) => {
    return (
        <div className="PostsList">
            {
                props.posts.map((post, i) => <PostItem key={i} message={post.message} like={post.like}/>)
            }
        </div>
    )
}