import React, {FC} from 'react'
import './Users.scss'
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    pageTitle: string
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
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
        pageTitle
    }) => {

    return (
        <div className="Users">
            <h1>{pageTitle}</h1>
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