import React from 'react'
import './Users.scss'
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

export const Users = (
  {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    followingInProgress,
    unfollow,
    follow
  }) => {

  return (
    <div className="Users">
      <div className="Users__heading">Users</div>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        onPageChanged={onPageChanged}
      />
      <div className="Users__list">
        {
          users.map(user => <User
              key={user.id}
              user={user}
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
            />
          )
        }
      </div>
    </div>
  )
}