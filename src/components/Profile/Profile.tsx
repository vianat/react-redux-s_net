import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

type propsPostsType = {
    // store: {
    //     posts: Array<postType>,
    //     newPostText: string
    // },
    // dispatch: any
}

const Profile = (props: propsPostsType) => {

    return (
        <div>
            <ProfileInfo/>

            <PostsContainer/>
            {/*<PostsContainer*/}
            {/*    store={props.store}*/}
            {/*    dispatch={props.dispatch}/>*/}
        </div>
    )
}

export default Profile;