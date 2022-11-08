import React, {FC} from "react";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {createField, GetFormKeys, Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {LoginFormDataType} from "../Login/Login";

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <>
                {createField<GetFormKeys<LoginFormDataType>>('Email', 'email', Input, [required])}
                {createField<GetFormKeys<LoginFormDataType>>('Password', 'password', Input, [required], {type: 'password'})}
                {createField<GetFormKeys<LoginFormDataType>>(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
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