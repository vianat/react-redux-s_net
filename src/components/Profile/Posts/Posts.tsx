import React from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/state";

type propsPostsType = {
        posts: Array<postType>
    }

const Posts = (props: propsPostsType) => {

    let postElements = props.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    return (
        <div>
            <div>
                Create new post
            </div>
            <div>
                <textarea></textarea>
                <button>Add new post</button>
                <button>Delete post</button>
            </div>

            {postElements}

        </div>
    );
};

export default Posts;