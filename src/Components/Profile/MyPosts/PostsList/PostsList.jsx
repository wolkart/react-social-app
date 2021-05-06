import React from 'react'
import './PostsList.scss'
import {PostItem} from "./PostItem/PostItem";

export const PostsList = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', like: 10},
        {id: 2, message: 'My name is Artem!', like: 87}
    ]

    return (
        <div className="PostsList">
            {postsData.map(post => <PostItem message={post.message} like={post.like}/>)}
        </div>
    )
}