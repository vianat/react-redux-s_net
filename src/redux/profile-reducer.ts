import {usersAPI} from "../api/usersAPI";
import {profileAPI} from "../api/profileAPI";

const ADD_POST = "ADD-POST";
const REMOVE_LAST_POST = "REMOVE-LAST-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_SET_STATUS";

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
        {id: 1, text: "post 1", likesCount: 1},
        {id: 2, text: "post 2", likesCount: 22},
        {id: 3, text: "post 3", likesCount: 333}
    ],
    profile: null,
    status: "status",
}

const profileReducer = (state: any = initialState, action: any) => {

    let stateCopy; // работаем с копией стейта обязательно
    switch (action.type) {
        case ADD_POST:
            let addPost = {
                id: state.posts[state.posts.length - 1].id++,
                text: action.newPostText,
                likesCount: 0
            }
            stateCopy = {...state,
                    posts: [...state.posts, addPost],   // копируем посты + пушим новый
            }
            return stateCopy;

        case REMOVE_LAST_POST:
            stateCopy = {...state}
            stateCopy.posts.pop();
            return stateCopy;

        case SET_USER_PROFILE: return {...state, profile: action.profile}

        case SET_STATUS: return {...state, status: action.status}

        default : return state;
    }
}
// Action Creators
export const addNewPost = (newPostText: string) => ({ type: ADD_POST, newPostText})
export const removePost = () => ({type: REMOVE_LAST_POST})
export const setUserProfile = (profile: string) => ({type: SET_USER_PROFILE, profile })
export const setStatus = (status: string) => ({type: SET_STATUS, status })
// THUNKS
export const getProfile = () => {
    return (dispatch: any) => {
        usersAPI.getProfile()
            .then(data => {
                setUserProfile(data)
        })
    }
}
export const getUserStatus = () => {
    return (dispatch: any) => {
        profileAPI.getUserStatus()
            .then(data => {
                setUserProfile(data)
        })
    }
}
export const getStatus = () => {
    return (dispatch: any) => {
        profileAPI.getUserStatus()
            .then(data => {
                setStatus(data)
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(data => {
                setStatus(status)
        })
    }
}

export default profileReducer;