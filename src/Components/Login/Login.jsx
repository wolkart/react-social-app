import React from "react";
import {reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form action="">
      <div>
        <input placeholder={'Login'}/>
      </div>
      <div>
        <input placeholder={'Password'}/>
      </div>
      <div>
        <input type={"checkbox"}/>
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
  return (
    <div>
      <h1>Login</h1>
      <loginReduxForm/>
    </div>
  )
}