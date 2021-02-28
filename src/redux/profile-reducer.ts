import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST_TEXT";
const REMOVE_LAST_POST = "REMOVE-LAST-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = { small: string, large: string }

export type profileStateType = {
    posts: Array<postType>,
    newPostText: string,
    profile: profileType
}
export type postType = {
    id: number,
    text: string
    likesCount: number
}


let initialState = {
    posts: [
        {id: 1, text: "first post", likesCount: 0},
        {id: 2, text: "tik-tok dno", likesCount: 177},
        {id: 3, text: "мамкин программист", likesCount: 62}
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state: any = initialState, action: any) => {

    let stateCopy; // работаем с копией стейта обязательно
    switch (action.type) {
        case ADD_POST:
            let addPost = {
                id: state.posts[state.posts.length - 1].id++,
                text: state.newPostText,
                likesCount: 0
            }
            stateCopy = {...state,
                    posts: [...state.posts, addPost],   // копируем посты + пушим новый
                    newPostText: ""                     // затираем ввод ввод после пуша
            }
            return stateCopy;

        case UPDATE_POST_TEXT: return {...state, newPostText: action.text}

        case REMOVE_LAST_POST:
            stateCopy = {...state}
            stateCopy.posts.pop();
            return stateCopy;

        case SET_USER_PROFILE: return {...state, profile: action.profile}

        default : return state;
    }
}

export const addNewPost = () => ({ type: ADD_POST})
export const changePost = (newText: string | undefined) => ({type: UPDATE_POST_TEXT, text: newText})
export const removePost = () => ({type: REMOVE_LAST_POST})
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile })

export const getProfile = () => {
    return (dispatch: any) => {
        usersAPI.getProfile().then(data => {
            setUserProfile(data)
        })
    }
}

export default profileReducer;