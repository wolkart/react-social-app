import React, {FC} from "react";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {createField, GetFormKeys, InputCustom} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {LoginFormDataType} from "../Login/Login";

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <>
                {createField<GetFormKeys<LoginFormDataType>>('Email', 'email', InputCustom, [required])}
                {createField<GetFormKeys<LoginFormDataType>>('Password', 'password', InputCustom, [required], {type: 'password'})}
                {createField<GetFormKeys<LoginFormDataType>>(undefined, 'rememberMe', InputCustom, [], {type: 'checkbox'}, 'remember me')}
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