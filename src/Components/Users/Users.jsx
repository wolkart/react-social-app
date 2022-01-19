import React from 'react'
import './Users.scss'
import userStub from '../../assets/images/ava-stub.jpg'
import {NavLink} from "react-router-dom";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className="Users">
      <div className="Users__heading">Users</div>
      <div className="Pagination">
        {pages.map((page, i) => {
          return (
            <div key={i}
                 className={props.currentPage === page ? "Pagination__item active" : "Pagination__item"}
                 onClick={() => props.onPageChanged(page)}
            >
              <span>{page}</span>
            </div>
          )
        })}
      </div>
      <div className="Users__list">
        {
          props.users.map(user => {
            return (
              <div className="User" key={user.id}>
                <div className="User__person">
                  <div className="User__photo">
                    <NavLink to={`/profile/${user.id}`}>
                      <img
                        src={
                          user.photos.small != null
                            ? user.photos.small
                            : userStub
                        }
                        alt={user.name}
                      />
                    </NavLink>
                  </div>
                  {
                    user.followed
                      ?
                      <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {props.unfollow(user.id)}}
                        className="User__button">
                        Unfollow
                      </button>
                      : <button
                        disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => {props.follow(user.id)}}
                        className="User__button">
                        Follow
                      </button>
                  }
                </div>
                <div className="User__info">
                  <div className="User__name">{user.name}</div>
                  <div className="User__status">{user.status}</div>
                  <div className="User__location">
                    {/*<span>{user.location.city}</span>*/}
                    {/*<span>{user.location.country}</span>*/}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}