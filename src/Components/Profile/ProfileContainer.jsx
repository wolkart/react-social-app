import React from 'react'
import './Profile.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 2

    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileWithRouterContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(ProfileWithRouterContainer)