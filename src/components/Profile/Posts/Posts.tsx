import React from 'react';
import Post from "./Post/Post";
import {postType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../other/FormsControls/FormsControls";

type propsPostsType = {
    state: {
        posts: Array<postType>,
        newPostText: string
    },
    addNewPost: (newPostText: string) => void,
    removePost: () => void
}

const maxLength10 = maxLengthCreator(10)

const Posts = (props: propsPostsType) => {
    let postElements = props.state.posts.map(p => <Post message={p.text} likes={p.likesCount}/>)

    let addPost = (values: any) => props.addNewPost(values.newPostText)
    // let deletePost = () => props.removePost()

    return (
        <div>
            <div>
                Create new post
            </div>

            <div>
                <AddPostReduxFormHOC onSubmit={addPost}/>
            </div>
            {postElements}
        </div>
    );
};

const AddPostForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name="newPostText"
               placeholder="post message"
               validate={[requiredField, maxLength10]}/>
        <Field component="button" name="Add new post"/>
        <Field component="button" name="Delete last post" type={"button"}/>
    </form>
}
const AddPostReduxFormHOC = reduxForm({form: 'postForm'})(AddPostForm)

export default Posts;