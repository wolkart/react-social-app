import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {FilterUsersType, follow, InitialStateUsersType, requestUsers, unfollow} from "../../redux/usersReducer";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFilter,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {AppStateType} from "../../redux/store-redux";

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number, filter: FilterUsersType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type PropsType = InitialStateUsersType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize, filter} = this.props
        requestUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {requestUsers, pageSize, filter} = this.props
        requestUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterUsersType) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(1, pageSize, filter)
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
                    followingInProgress={this.props.followingInProgress}
                    onFilterChange={this.onFilterChanged}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): InitialStateUsersType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect<InitialStateUsersType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps, {
        follow,
        unfollow,
        requestUsers: requestUsers
    })
)(UsersContainer)