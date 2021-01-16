import React from 'react';
import Post from "./Post/Post";
import {postType} from '../../../redux/state';

type propsPostsType = {
    state:{
        posts: Array<postType>,
        newPostText: string
    },
    addPost: Function,
    updatePostText: Function,
    removeLastPost: Function
}

const Posts = (props: propsPostsType) => {

    let postElements = props.state.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        props.addPost();
    }
    let changePost = () => {
        let newText = newPost.current?.value;
        props.updatePostText(newText);
    }

    return (
        <div>
            <div>
                Create new post
            </div>
            <div>
                <textarea ref={newPost} onChange={changePost} value={props.state.newPostText}/>
                <button onClick={addNewPost}>Add new post</button>
                <button onClick={()=>{props.removeLastPost()}}>Delete post</button>
            </div>
            {postElements}

        </div>

    );
};

export default Posts;