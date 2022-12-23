import React, {FC, memo} from 'react'
import './MyPosts.scss'
import {PostsList} from "./PostsList/PostsList";
import {AddPostFormRedux, NewPostForm} from '../../Forms/AddPostForm';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {actions} from "../../../redux/profileReducer";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

export const MyPosts: FC = memo(() => {
    const {posts} = useAppSelector(state => state.profilePage)
    const dispatch = useAppDispatch()


    const onAddPost = (values: NewPostForm) => {
        dispatch(actions.addNewPost(values.newPost))
    }

    return (
        <div className="MyPosts">
            <div className="MyPosts__header">My posts</div>
            <div className='AddPost'>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <PostsList posts={posts}/>
        </div>
    )
})