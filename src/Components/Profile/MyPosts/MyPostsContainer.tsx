import React from 'react'
import {actions} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {PostType} from "../../../types/types";

export type MapStateToPropsType = {
  posts: PostType[]
}

export type MapDispatchPropsType = {
  addNewPost: (value: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts
  }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {addNewPost: actions.addNewPost}
) (MyPosts)