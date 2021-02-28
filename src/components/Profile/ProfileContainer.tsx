import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, profileStateType} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: profileStateType
    getProfile: () => void
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // let userId =  this.props.match.param.userId
        this.props.getProfile();
    }

    render() {
        return <div>
                    <Profile {...this.props} profile={this.props.profile}/>
               </div>
    }
}

let mapStateToProps = (state: stateAllType) => ( { profile: state.profilePage.profile} ) // доступ к стейту даёт из connect-provider

// let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(ProfileContainer);