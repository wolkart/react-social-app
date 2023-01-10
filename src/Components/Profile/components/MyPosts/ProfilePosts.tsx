import React, {FC, memo} from 'react'
import {PostsList} from "./PostsList/PostsList";
import {ProfilePostFormRedux, NewPostForm} from './ProfilePostsForm';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {actions} from "../../../../redux/profileReducer";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {StyledProfilePosts, StyledProfilePostHeader, StyledProfilePostsForm} from './styled';
import {Typography} from "antd";

const {Title} = Typography

export const ProfilePosts: FC = memo(() => {
    const {posts} = useAppSelector(state => state.profilePage)
    const dispatch = useAppDispatch()


    const onAddPost = (values: NewPostForm) => {
        dispatch(actions.addNewPost(values.newPost))
    }

    return (
        <StyledProfilePosts>
            <Title
                level={2}
                children={'Посты'}
            />
            <ProfilePostFormRedux onSubmit={onAddPost}/>
            <PostsList posts={posts}/>
        </StyledProfilePosts>
    )
})