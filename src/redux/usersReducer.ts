import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {ActionsType, AppDispatch, ThunkType} from "./store";
import {usersAPI} from "../api/users-api";
import {APIResponseType} from "../api/api";

//todo: можно убрать константы, т.к. actions creators типизированы как as const
// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET-USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as UserType[],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[],
    filter: {
        term: "",
        friend: null as null | boolean
    }
}

export type InitialStateUsersType = typeof initialState
export type FilterUsersType = typeof initialState.filter

const usersReducer = (state = initialState, action: UserActionsType): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SET_USERS': {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        case "SET_FILTER": {
            return {...state, filter: action.payload}
        }
        default:
            return state
    }
}

type UserActionsType = ActionsType<typeof actions>
type UserThunkType = ThunkType<UserActionsType>

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
    setFilter: (filter: FilterUsersType) => ({type: 'SET_FILTER', payload: filter } as const)
}

export const requestUsers = (page: number, pageSize: number, filter: FilterUsersType): UserThunkType =>
    async (dispatch: AppDispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))

        const data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)

        dispatch(actions.setUsers(data.items))
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }

const _followUnfollowFlow = async (dispatch: AppDispatch,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => UserActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId))

    const response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): UserThunkType =>
    async (dispatch: AppDispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }

export const unfollow = (userId: number): UserThunkType =>
    async (dispatch: AppDispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }

export default usersReducer