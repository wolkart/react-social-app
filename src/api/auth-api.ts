import {instance, APIResponseType} from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}


export const authAPI = {
    getMe() {
        return instance.get<APIResponseType<MeResponseDataType>>('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<APIResponseType<LoginResponseDataType>>('auth/login', {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}