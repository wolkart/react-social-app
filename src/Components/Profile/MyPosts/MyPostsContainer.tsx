import React from 'react'
import {actions, ProfileDispatchType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {PostType} from "../../../types/types";

type MapStateToPropsType = {
  posts: PostType[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = (dispatch: ProfileDispatchType) => {
  return {
    addNewPost: (post: string) => {
      dispatch(actions.addNewPost(post))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)