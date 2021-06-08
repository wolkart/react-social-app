import React from 'react'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/postReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    postText: state.profilePage.textPost
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator())
    },
    onUpdateTextPost: (text) => {
      dispatch(updateTextPostActionCreator(text))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)