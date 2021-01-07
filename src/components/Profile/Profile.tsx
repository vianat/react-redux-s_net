import React from 'react';
import { postType } from '../..';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type propsPostsType = {
    posts: Array<postType>
}

const Profile = (props:propsPostsType) => {

    return (
        <div>
            <ProfileInfo />

            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;