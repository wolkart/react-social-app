import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import usersPreloader from "../../assets/images/UserLoader.gif";
import {Preloader} from "../common/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)