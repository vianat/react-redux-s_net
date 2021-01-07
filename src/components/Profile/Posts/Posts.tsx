import React from 'react';
// import css from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    let posts = [
        {id: 1, text: "hi its first post", likesCount: 0},
        {id: 2, text: "tiktok gavno", likesCount: 177},
        {id: 3, text: "you are fufel!", likesCount: 62}
    ]

    let postElements = posts.map(el=> <Post message={el.text} likes={el.likesCount}/>)

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