import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, profileStateType} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type ProfileContainerPropsType = {
    profile: profileStateType
    isAuth: boolean

    getProfile: () => void
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return <div>
                    <Profile {...this.props} profile={this.props.profile}/>
               </div>
    }
}
type AuthRedirectComponentPropsType = {
    profile: profileStateType
    isAuth: boolean

    getProfile: () => void
}
const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
        if (props.isAuth) return <Redirect to="/login"/>
        return <ProfileContainer {...props}/>
}

let mapStateToProps = (state: stateAllType) => ( {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
} ) // доступ к стейту даёт из connect-provider

// let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(AuthRedirectComponent);