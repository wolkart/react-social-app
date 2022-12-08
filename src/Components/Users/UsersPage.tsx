import React, {FC, useEffect} from 'react'
import './Users.scss'
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterUsersType, follow, requestUsers, unfollow} from "../../redux/usersReducer";
import {useAppSelector} from "../../hooks/useAppSelector";
import { useDispatch } from 'react-redux';
import {Preloader} from "../common/Preloader";

export const UsersPage: FC = () => {
    const {users, totalUsersCount, pageSize, currentPage, filter, followingInProgress, isFetching} = useAppSelector(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onFilterChange = (filter: FilterUsersType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
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
                                    follow={dispatch(follow)}
                                    unfollow={dispatch(unfollow)}
                                />
                            </div>
                        ))
                        : <div>Пользователи не найдены</div>
                    }
                </div>
            </div>
        </>
    )
}