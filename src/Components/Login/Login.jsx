import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Login'}
          name={'login'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={'rememberMe'}
          component={Input}
          validate={[required]}
        />
        remember me
      </div>
      <div>
        <button type={"submit"}>
          Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}