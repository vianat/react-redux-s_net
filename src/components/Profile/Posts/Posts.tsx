import React from 'react';
import css from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
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

            <Post message="hi its first post" likes={0}/>
            <Post message="tiktok gavno" likes={77}/>
            <Post message="fufel" likes={62}/>

        </div>
    );
};

export default Posts;