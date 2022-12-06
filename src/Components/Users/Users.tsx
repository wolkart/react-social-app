import React, {FC} from 'react'
import './Users.scss'
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterUsersType} from "../../redux/usersReducer";

type PropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onFilterChange: (filter: FilterUsersType) => void
}

export const Users: FC<PropsType> = (
    {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        followingInProgress,
        unfollow,
        follow,
        onFilterChange
    }) => {

    return (
        <div className="Users">
            <div className="Users__header">
                <h1>Пользователи</h1>
                <UsersSearchForm
                    onFilterChange={onFilterChange}
                />
            </div>
            {totalUsersCount > 0 && <Pagination
                pageSize={pageSize}
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                onPageChanged={onPageChanged}
            />}
            <div className="Users__list">
                {totalUsersCount > 0
                    ? users.map(user => (
                        <div key={user.id} className="Users__item">
                            <User
                                user={user}
                                followingInProgress={followingInProgress}
                                follow={follow}
                                unfollow={unfollow}
                            />
                        </div>
                    ))
                    : <div>Пользователи не найдены</div>
                }
            </div>
        </div>
    )
}