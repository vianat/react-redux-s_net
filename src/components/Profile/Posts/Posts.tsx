import React from 'react';
// import css from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    let postData = [
        {id: 1, text: "hi its first post", likesCount: 0},
        {id: 2, text: "tiktok gavno", likesCount: 177},
        {id: 3, text: "you are fufel!", likesCount: 62}
    ]

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

            <Post message={postData[0].text} likes={postData[0].likesCount}/>
            <Post message={postData[1].text} likes={postData[1].likesCount}/>
            <Post message={postData[2].text} likes={postData[2].likesCount}/>

        </div>
    );
};

export default Posts;