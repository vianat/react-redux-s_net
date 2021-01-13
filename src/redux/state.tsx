import { RenderAllApp } from ".."

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

let state = {
    profilePage: {
        posts: [
            {id: 1, text: "first post", likesCount: 0},
            {id: 2, text: "tik-tok dno", likesCount: 177},
            {id: 3, text: "мамкин программист", likesCount: 62}
        ],
        newPostText: "Type your new post"
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
        newMessegeText: "Type your new messege"
    }
}

export let addMessege = (newMessegeText: string) => {
    let addMessege = {
        id: 4,
        text: newMessegeText
    }
    state.dialogsPage.messeges.push(addMessege);
    RenderAllApp()
}
export let updateMessegeText = (text: string) => {
    state.dialogsPage.newMessegeText = text;
    RenderAllApp()
}
export let removeLastMessege = () => {
    state.dialogsPage.messeges.pop();
    RenderAllApp()
}
export let addPost = (newPostText: string) => {
    let addPost = {
        id: 4,
        text: newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(addPost);
    RenderAllApp()
}
export let updatePostText = (text: string) => {
    state.profilePage.newPostText = text;
    RenderAllApp()
}
export let removeLastPost = () => {
    state.profilePage.posts.pop();
    RenderAllApp()
}

export default state