import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {profileStateType, setUserProfile} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type ProfileContainerPropsType = {
    profile: profileStateType   // получает из mapStateToProps
    setUserProfile: any         // получает из mapDispatchToProps (из connect)
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // let userId =  this.props.match.param.userId
        usersAPI.getProfile().then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return  <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
    }
};

let mapStateToProps = (state: stateAllType) => ( { profile: state.profilePage.profile} ) // доступ к стейту даёт из connect-provider

// let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);