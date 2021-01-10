import React from 'react';
import Post from "./Post/Post";
import {addPost, postType, removePost } from '../../../redux/state';

type propsPostsType = {
        posts: Array<postType>,
        addPost:any
    }

const Posts = (props: propsPostsType) => {

    let postElements = props.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addNewPost = () => {
        let newText = newPost.current?.value
        if(typeof(newText) === "string"){
            addPost(newText);
        }
    }

    return (
        <div>
            <div>
                Create new post
            </div>
            <div>
                <textarea ref={newPost}></textarea>
                <button onClick={addNewPost}>Add new post</button>
                <button onClick={removePost}>Delete post</button>

            </div>
            {postElements}

        </div>

    );
};

export default Posts;