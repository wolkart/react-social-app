import axios from "axios";
import {PhotosType, ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ccee2fb7-4271-468b-bff1-b5597f7aa817'
    }
})

export enum ResultCodes {
    Success = 0,
    Error = 1
}

type UserResponseType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}

type GetUsersResponseType = {
    items: Array<UserResponseType>
    totalCount: number
    error: string | null
}

type FollowType = {
    data: any
    resultCode: ResultCodes
    messages: string[]
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post<FollowType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.log('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    changePhoto(photoFile: any) {
        const formData = new FormData()

        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
    }
}

type GetMeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: string[]
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodes
    messages: string[]
}

export const authAPI = {
    getMe() {
        return instance.get<GetMeResponseType>('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LoginResponseType>('auth/login')
    }
}