import React, {FC} from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store-redux";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <>
                {createField<LoginFormDataTypeKeys>('Email', 'email', Input, [required])}
                {createField<LoginFormDataTypeKeys>('Password', 'password', Input, [required], {type: 'password'})}
                {createField<LoginFormDataTypeKeys>(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
                {error && <div className="FormSummaryError">
                    {error}
                </div>}
                <div>
                    <button type={"submit"}>
                        Login
                    </button>
                </div>
            </>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginFormDataType = {
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormDataTypeKeys = Extract<keyof LoginFormDataType, string>

const Login: FC<MapStateToPropsType & MapDispatchPropsType> = ({isAuth}) => {
    const onSubmit = (formData: LoginFormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)