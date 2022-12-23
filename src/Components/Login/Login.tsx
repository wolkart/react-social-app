import React, {FC} from "react";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "../Forms/LoginForm";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";

export type LoginFormDataType = {
    rememberMe: boolean
    password: string
    email: string
}


export const Login: FC = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
            />
        </div>
    )
}