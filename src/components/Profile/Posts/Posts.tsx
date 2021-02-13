import React from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/profile-reducer";

type propsPostsType = {
    state: {
        posts: Array<postType>,
        newPostText: string
    },
    addNewPost: () => void,
    changePost: (newText: string | undefined) => void,
    removePost: () => void
}

const Posts = (props: propsPostsType) => {
    let postElements = props.state.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    let newPost = React.createRef<HTMLTextAreaElement>();

    let addPost = () => props.addNewPost()
    let editPost = () => {
        let newText = newPost.current?.value;
        props.changePost(newText);
    }
    let deletePost = () => props.removePost()

    return (
        <div>
            <div>
                Create new post
            </div>

            <div>
                <textarea
                    placeholder={"Enter your post"}
                    ref={newPost} onChange={editPost}
                    value={props.state.newPostText}/>
                <button onClick={addPost}>Add new post</button>
                <button onClick={() => {deletePost()}}>Delete post</button>
            </div>
            {postElements}
        </div>
    );
};

export default Posts;