import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";

type propsPostsType = {
    state:{
        posts: Array<postType>
    },
    addPost: any;
}

const Profile = (props:propsPostsType) => {

    return (
        <div>
            <ProfileInfo />

            <Posts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;