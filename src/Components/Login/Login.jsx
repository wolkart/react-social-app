import React from "react";
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/Forms/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField('Email', 'email', Input, [required])}
      {CreateField('Password', 'password', Input, [required], {type: 'password'})}
      {CreateField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
      {error && <div className="FormSummaryError">
        {error}
      </div>}
      <div>
        <button type={"submit"}>
          Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
  const onSubmit = (formData) => {
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

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login)