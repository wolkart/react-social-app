import React from 'react'
import './Users.scss'
import * as axios from "axios";
import userStub from '../../assets/images/wolf.png'

export class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                   className={this.props.currentPage === page ? "Pagination__item active" : "Pagination__item"}
                   onClick={() => this.onPageChanged(page)}
              >
                <span>{page}</span>
              </div>
            )
          })}
        </div>
        <div className="Users__list">
          {
            this.props.users.map(user => {
              return (
                <div className="User" key={user.id}>
                  <div className="User__person">
                    <div className="User__photo">
                      <img src={user.photos.small != null ? user.photos.small : userStub} alt={user.name}/>
                    </div>
                    {
                      user.followed
                        ?
                        <button onClick={() => this.props.unfollow(user.id)} className="User__button">Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)} className="User__button">Follow</button>
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
}