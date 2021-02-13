import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileStateType, setUserProfile} from "../../redux/profile-reducer";
import {stateAllType} from "../../redux/redux-store";

interface State {
}  // костыль со стекеОвер, типа типизации пропсов
type ProfileContainerPropsType = {   // костыль со стекеОвер, типа типизации пропсов

    profile: profileStateType

    // addNewPostActionCreator: () => void
    // updatePostTextActionCreator:(newText: string | undefined) => void
    // removeLastPostActionCreator:() => void
    setUserProfile: any
}
class ProfileContainer extends React.Component<ProfileContainerPropsType, State> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return  <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
    }
};

let mapStateToProps = (state: stateAllType) => ( { profile: state.profilePage.profile} )

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);