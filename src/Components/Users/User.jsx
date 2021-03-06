import React from 'react'
import './User.scss'
import userStub from '../../assets/images/ava-stub.jpg'
import {NavLink} from "react-router-dom";

export const User = (
  {
    user,
    followingInProgress,
    unfollow,
    follow
  }) => {

  return (
    <div className="User">
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
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
              className="User__button">
              Unfollow
            </button>
            : <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
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
}