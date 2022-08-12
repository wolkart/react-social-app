import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ccee2fb7-4271-468b-bff1-b5597f7aa817'
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export interface GetItemsType {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: string[]
}