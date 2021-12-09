import React from 'react'
import './Users.scss'
import * as axios from "axios";
import userStub from '../../assets/images/wolf.png'

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
                    <img src={user.photos.small != null ? user.photos.small : userStub} alt={user.name}/>
                  </div>
                  {
                    user.followed
                      ?
                      <button onClick={() => props.unfollow(user.id)} className="User__button">Unfollow</button>
                      : <button onClick={() => props.follow(user.id)} className="User__button">Follow</button>
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