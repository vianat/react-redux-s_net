import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/store";
import PostsContainer from "./Posts/PostsContainer";

type propsPostsType = {
    store: {
        posts: Array<postType>,
        newPostText: string
    },
    dispatch: any
}

const Profile = (props: propsPostsType) => {

    return (
        <div>
            <ProfileInfo/>

            <PostsContainer
                store={props.store}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;