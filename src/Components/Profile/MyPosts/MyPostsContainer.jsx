import React from 'react'
import {actions} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: post => {
      dispatch(actions.addNewPost(post))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)