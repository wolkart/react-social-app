import React from 'react'
import './Profile.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {changePhoto, getUserProfile, getUserStatus, saveProfile, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) userId = this.props.authorizedUserId

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserStatus}
        changePhoto={this.props.changePhoto}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, changePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)