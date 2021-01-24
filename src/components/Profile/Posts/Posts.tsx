import React from 'react';
import Post from "./Post/Post";
import {
    addNewPostActionCreator,
    removeLastPostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-reducer';
import {postType} from "../../../redux/state";

type propsPostsType = {
    state:{
        posts: Array<postType>,
        newPostText: string
    },
    dispatch: any
}

const Posts = (props: propsPostsType) => {

    let postElements = props.state.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.dispatch( addNewPostActionCreator() )
    }
    let changePost = () => {
        let newText = newPost.current?.value;
        props.dispatch( updatePostTextActionCreator(newText))
    }
    let removePost = () => {
        props.dispatch( removeLastPostActionCreator())
    }

    return (
        <div>
            <div>
                Create new post
            </div>
            <div>
                <textarea placeholder={"Enter your post"} ref={newPost} onChange={changePost} value={props.state.newPostText}/>
                <button onClick={addNewPost}>Add new post</button>
                <button onClick={()=>{removePost( )}}>Delete post</button>
            </div>
            {postElements}

        </div>

    );
};

export default Posts;