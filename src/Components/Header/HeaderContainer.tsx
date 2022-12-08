import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
}

class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)
