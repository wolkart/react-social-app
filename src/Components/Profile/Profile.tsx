import React, {FC, useEffect, useRef} from 'react'
import {OwnerCover} from "./components/OwnerCover/OwnerCover";
import {ProfileDashboard} from "./components/ProfileDashboard/ProfileDashboard";
import {ProfilePosts} from './components/MyPosts/ProfilePosts';
import {useAppSelector} from "../../hooks/useAppSelector";
import {Redirect, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserProfile, getUserStatus} from '../../redux/profileReducer';

const Profile: FC = () => {
    const {profile, status, posts} = useAppSelector(state => state.profilePage)
    const {userId: ownerId, isAuth} = useAppSelector(state => state.auth)
    const {userId: otherId} = useParams<{ userId: string | undefined }>()
    const dispatch = useDispatch()
    const currentUserIdRef = useRef<number>()

    const refreshProfile = (userId: number) => {
        dispatch(getUserProfile(userId))
        dispatch(getUserStatus(userId))
        currentUserIdRef.current = userId
    }

    useEffect(() => {
        if (otherId) {
            refreshProfile(Number(otherId))
        }
    }, [])

    useEffect(() => {
        if (Number(otherId) !== currentUserIdRef.current) {
            if (ownerId) {
                refreshProfile(ownerId)
            }
        }
    }, [otherId])

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className="Profile">
            {!otherId && <OwnerCover/>}
            <ProfileDashboard
                profile={profile}
                status={status}
                isOwner={!otherId}
            />
            <ProfilePosts
                posts={posts}
                photo={profile && profile.photos.small}
            />
        </div>
    )
}

export default Profile