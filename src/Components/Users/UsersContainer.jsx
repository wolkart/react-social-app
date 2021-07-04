import React from "react";
import {Users} from "./classUsers";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {
        dispatch(followAC(userId))
      },
      unfollow: (userId) => {
        dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users))
      }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)