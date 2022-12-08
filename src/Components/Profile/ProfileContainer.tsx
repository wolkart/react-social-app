import React, {ComponentType} from 'react'
import './Profile.scss'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {changePhoto, getUserProfile, getUserStatus, saveProfile, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/store";
import {ProfileType} from "../../types/types";

export type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: number | null) => void
    getUserStatus: (userId: number | null) => void
    updateUserStatus: (status: string) => void
    changePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
export type OtherPropsType = {
    isOwner: boolean
}
type PathParamsType = {
    userId: string
}

export type ProfilePropsType =
    MapStatePropsType
    & MapDispatchPropsType
    & OtherPropsType
    & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<ProfilePropsType> {
    constructor(props: ProfilePropsType) {
        super(props);
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) userId = this.props.authorizedUserId

        if (!userId) {
            console.error('Ошибка')
        } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }

    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfilePropsType, prevState: ProfilePropsType) {
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
                updateUserStatus={this.props.updateUserStatus}
                changePhoto={this.props.changePhoto}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose<ComponentType>(
    connect(
        mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus, changePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)