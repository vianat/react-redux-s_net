import React from 'react';
import {addNewPostActionCreator, removeLastPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

type propsPostsType = {
    // store: {
    //     posts: Array<postType>,
    //     newPostText: string
    // },
    // dispatch: any
}

const PostsContainer = (props: propsPostsType) => {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    let addNewPost = () => store.dispatch(addNewPostActionCreator())
                    let changePost = (newText: string | undefined) => store.dispatch(updatePostTextActionCreator(newText))
                    let removePost = () => store.dispatch(removeLastPostActionCreator())

                    return (
                        <Posts
                            state={store.getState().profilePage}
                            addNewPost={addNewPost}
                            changePost={changePost}
                            removePost={removePost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;