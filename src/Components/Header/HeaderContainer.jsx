import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    // userId: state.auth.userId,
    // email: state.auth.email,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
