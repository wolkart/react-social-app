import React, {FC} from 'react'
import './PostsList.scss'
import {PostItem} from "./PostItem/PostItem";
import {PostType} from "../../../../../types/types";

type PropsType = {
    posts: PostType[]
    photo: string | null
}

export const PostsList: FC<PropsType> = ({posts, photo}) => {
    return (
        <div className="PostsList">
            {
                posts.map((post, i) => <PostItem key={i} photo={photo} message={post.message} like={post.like}/>)
            }
        </div>
    )
}