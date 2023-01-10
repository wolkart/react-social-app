import React, {FC} from 'react'
import './PostsList.scss'
import {PostItem} from "./PostItem/PostItem";
import {PostType} from "../../../../../types/types";

type PropsType = {
    posts: PostType[]
}

export const PostsList: FC<PropsType> = ({posts}) => {
    return (
        <div className="PostsList">
            {
                posts.map((post, i) => <PostItem key={i} message={post.message} like={post.like}/>)
            }
        </div>
    )
}