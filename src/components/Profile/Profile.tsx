import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";

type propsPostsType = {
    state:{
        posts: Array<postType>,
        newPostText: string
    },
    dispatch: any
}

const Profile = (props: propsPostsType) => {

    return (
        <div>
            <ProfileInfo />

            <Posts state={props.state}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;