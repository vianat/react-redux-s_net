import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";

type propsPostsType = {
    state:{
        posts: Array<postType>,
        newPostText: string
    },
    addPost: Function,
    updatePostText: Function,
    removeLastPost: Function
}

const Profile = (props:propsPostsType) => {

    return (
        <div>
            <ProfileInfo />

            <Posts state={props.state}
                   addPost={props.addPost}
                   updatePostText={props.updatePostText}
                   removeLastPost={props.removeLastPost}/>
        </div>
    )
}

export default Profile;