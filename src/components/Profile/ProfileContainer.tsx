import React from 'react';
import Profile from "./Profile";
import axios from "axios";

interface State {
}  // костыль со стекеОвер, типа типизации пропсов
interface PropsType {   // костыль со стекеОвер, типа типизации пропсов
    // users: Array<userType>
    // setUsers: (users: Array<userType>) => void
    // setTotalUsersCount: (count: number) => void
    // setToggleIsFetching: (isFetching: boolean) => void
}
class ProfileContainer extends React.Component<PropsType, State> {

    componentDidMount() {
        // this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile />
            </div>
        );
    }
};

export default ProfileContainer;