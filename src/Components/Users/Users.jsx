import React from 'react'
import './Users.scss'
import userStub from '../../assets/images/ava-stub.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                      <img src={user.photos.small != null ? user.photos.small : userStub} alt={user.name}/>
                    </NavLink>
                  </div>
                  {
                    user.followed
                      ?
                      <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'ccee2fb7-4271-468b-bff1-b5597f7aa817'
                          }
                        })
                          .then(response => {
                            if (response.data.resultCode === 0) {
                              props.unfollow(user.id)
                            }
                          })
                      }} className="User__button">Unfollow</button>
                      : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                          withCredentials: true,
                          headers: {
                            'API-KEY': 'ccee2fb7-4271-468b-bff1-b5597f7aa817'
                          }
                        })
                          .then(response => {
                            if (response.data.resultCode === 0) {
                              props.follow(user.id)
                            }
                          })
                      }} className="User__button">Follow</button>
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