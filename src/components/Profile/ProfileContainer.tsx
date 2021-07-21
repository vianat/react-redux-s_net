import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, profileStateType, updateStatus} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: profileStateType
    isAuth: boolean
    status: string
    autorizedUserId: number

    getProfile: () => void
    getUserStatus: () => void
    updateStatus: (status: string) => void
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        console.log(this.props.autorizedUserId)
debugger
        if(this.props.isAuth) {
            this.props.getProfile();
            this.props.getUserStatus();
        }else {
            <Redirect to="/login"/>
        }
    }

    render() {
        return <div>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
               </div>
    }
}
type AuthRedirectComponentPropsType = {
    profile: profileStateType
    isAuth: boolean
    status: string
    autorizedUserId: number

    getProfile: () => void
    getUserStatus: () => void
    updateStatus: (status: string) => void
}
const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
        if (!props.isAuth) return <Redirect to="/login"/>
        return <ProfileContainer {...props}/>
}

const MSTP = (state: stateAllType) => ( {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
} ) // доступ к стейту даёт из connect-provider

export default connect(MSTP, {getProfile, getUserStatus, updateStatus})(AuthRedirectComponent);