import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {profileStateType} from "../../redux/profile-reducer";

type propsPostsType = {
    profile: profileStateType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: propsPostsType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>

            <PostsContainer/>
        </div>
    )
}

export default Profile;