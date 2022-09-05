import React, {FC} from "react";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {createField, Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {LoginFormDataType} from "../Login/Login";

type LoginFormDataTypeKeys = Extract<keyof LoginFormDataType, string>


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

export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)