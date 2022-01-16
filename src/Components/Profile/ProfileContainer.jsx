import React from 'react'
import './Profile.scss'
import {Profile} from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 2

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfileInfo(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileWithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileInfo})(ProfileWithRouterContainer)