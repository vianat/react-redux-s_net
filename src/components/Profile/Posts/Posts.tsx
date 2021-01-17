import React from 'react';
import Post from "./Post/Post";
import {postType} from '../../../redux/state';

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
        props.dispatch( { type: "ADD-POST"} )
    }
    let changePost = () => {
        let newText = newPost.current?.value;
        props.dispatch( {type: "UPDATE-POST_TEXT", text: newText} );
    }

    return (
        <div>
            <div>
                Create new post
            </div>
            <div>
                <textarea ref={newPost} onChange={changePost} value={props.state.newPostText}/>
                <button onClick={addNewPost}>Add new post</button>
                <button onClick={()=>{props.dispatch({type: "REMOVE-LAST-POST"})}}>Delete post</button>
            </div>
            {postElements}

        </div>

    );
};

export default Posts;