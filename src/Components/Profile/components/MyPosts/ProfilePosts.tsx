import React, {FC, memo} from 'react'
import {PostsList} from "./PostsList/PostsList";
import {ProfilePostFormRedux, NewPostForm} from './ProfilePostsForm';
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {actions} from "../../../../redux/profileReducer";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {StyledProfilePosts, StyledProfilePostHeader, StyledProfilePostsForm} from './styled';
import {Typography} from "antd";
import {PhotosType, PostType} from "../../../../types/types";

const {Title} = Typography

interface PropsType {
    posts: PostType[]
    photo: string | null
}

export const ProfilePosts: FC<PropsType> = memo(({posts, photo}) => {
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
            <PostsList posts={posts} photo={photo}/>
        </StyledProfilePosts>
    )
})