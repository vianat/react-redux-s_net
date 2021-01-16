// import { RenderAllApp } from ".."
// import {renderEntireTree} from "../index";

let renderEntireTree = (state: stateType) => {
    console.log("state changed")
}

export type postType = {
    id: number,
    text: string
    likesCount: number
}
export type dialogType = {
    id: number,
    name: string
}
export type messegeType = {
    id: number,
    text: string
}
export type stateType = {
    profilePage: {
        posts: Array<postType>,
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>,
        newMessegeText: string
    }
}

let state = {
    profilePage: {
        posts: [
            {id: 1, text: "first post", likesCount: 0},
            {id: 2, text: "tik-tok dno", likesCount: 177},
            {id: 3, text: "мамкин программист", likesCount: 62}
        ],
        newPostText: "Type new post"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Fufeliy"},
            {id: 2, name: "Evpatiy"},
            {id: 3, name: "Mefodiy"},
            {id: 4, name: "Efiopiy"},
            {id: 5, name: "Gustav"}
        ],
        messeges: [
            {id: 1, text: "Hi friend"},
            {id: 2, text: "What is going on here?"},
            {id: 3, text: "Is it react? really?"},
            {id: 4, text: "Nice !!!"}
        ],
        newMessegeText: "Type new messege"
    }
}

export let addMessege = () => {
    let addMessege = {
        id: 4,
        text: state.dialogsPage.newMessegeText
    }
    state.dialogsPage.messeges.push(addMessege);
    state.dialogsPage.newMessegeText = "";
    renderEntireTree(state)
}
export let updateMessegeText = (text: string) => {
    state.dialogsPage.newMessegeText = text;
    renderEntireTree(state)
}
export let removeLastMessege = () => {
    state.dialogsPage.messeges.pop();
    renderEntireTree(state)
}
export let addPost = () => {
    let addPost = {
        id: 4,
        text: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(addPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state)
}
export let updatePostText = (text: string) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state)
}
export let removeLastPost = () => {
    state.profilePage.posts.pop();
    renderEntireTree(state)
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}

export default state