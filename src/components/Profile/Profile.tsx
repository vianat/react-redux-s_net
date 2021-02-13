import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {profileStateType} from "../../redux/profile-reducer";

type propsPostsType = {
    profile: profileStateType
}

const Profile = (props: propsPostsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>

            <PostsContainer/>
        </div>
    )
}

export default Profile;