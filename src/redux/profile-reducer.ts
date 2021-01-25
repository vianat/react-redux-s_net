// import {postType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST_TEXT";
const REMOVE_LAST_POST = "REMOVE-LAST-POST";

let initialState = {
    posts: [
        {id: 1, text: "first post", likesCount: 0},
        {id: 2, text: "tik-tok dno", likesCount: 177},
        {id: 3, text: "мамкин программист", likesCount: 62}
    ],
    newPostText: ""
}
// type profileStateType = {
//     posts: Array<postType>,
//     newPostText: string
// }

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let addPost = {
                id: state.posts[state.posts.length - 1].id++,
                text: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(addPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case REMOVE_LAST_POST:
            state.posts.pop();
            return state;
        default :
            return state;
    }
}

export const addNewPostActionCreator = () => ({ type: ADD_POST})
export const updatePostTextActionCreator = (newText: string | undefined) => {
    return {type: UPDATE_POST_TEXT, text: newText}
}
export const removeLastPostActionCreator = () => ({type: REMOVE_LAST_POST})

export default profileReducer;