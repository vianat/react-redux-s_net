import React from 'react';
import {
    addNewPostActionCreator,
    removeLastPostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-reducer';
import {postType} from "../../../redux/store";
import Posts from "./Posts";

type propsPostsType = {
    store:{
        posts: Array<postType>,
        newPostText: string
    },
    dispatch: any
}

const PostsContainer = (props: propsPostsType) => {

    let addNewPost = () => props.dispatch( addNewPostActionCreator() )
    let changePost = (newText: string | undefined) => props.dispatch( updatePostTextActionCreator(newText))
    let removePost = () => props.dispatch( removeLastPostActionCreator())

    return (
        <div>
            <Posts
                state={props.store}
                addNewPost={addNewPost}
                changePost={changePost}
                removePost={removePost}/>
        </div>
    );
};

export default PostsContainer;