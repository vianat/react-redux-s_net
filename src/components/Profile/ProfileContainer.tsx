import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileStateType, setUserProfile} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: profileStateType   // получает из mapStateToProps
    setUserProfile: any         // получает из mapDispatchToProps (из connect)
}
class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        // let userId =  this.props.match.param.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data)
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