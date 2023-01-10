import React, {FC, useEffect, useState} from 'react'
import './Users.scss'
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterUsersType, requestUsers} from "../../redux/usersReducer";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from 'react-redux';
import {Preloader} from "../common/Preloader/Preloader";
import {useHistory} from "react-router-dom";
import queryString from "querystring";

type QueryParamsType = {
    term?: string
    friend?: string
    page?: string
}

export const UsersPage: FC = () => {
    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        filter,
        followingInProgress,
        isFetching
    } = useAppSelector(state => state.usersPage)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsedSearch = queryString.parse(history.location.search.substring(1))

        let actualPage = currentPage
        let actualFilter = filter

        if (parsedSearch.page) actualPage = Number(parsedSearch.page)

        if (parsedSearch.term) actualFilter = {...actualFilter, term: parsedSearch.term as string}

        switch (parsedSearch.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        query.page = String(currentPage)

        history.push({
            pathname: `${history.location.pathname}`,
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

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
                {totalUsersCount > 0 &&
                    <Pagination
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