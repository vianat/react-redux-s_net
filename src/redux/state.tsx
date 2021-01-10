import {renderEntiredTree} from "../render";

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
        ]
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
        ]
    }
}

export let addMessege = (newMessegeText: string) => {
    let addMessege = {
        id: 4,
        text: newMessegeText
    }
    state.dialogsPage.messeges.push(addMessege);
    renderEntiredTree(state);
}
export let addPost = (newPostText: string) => {
    let addPost = {
        id: 4,
        text: newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(addPost);
    renderEntiredTree(state);
}
export let removePost = () => {
    state.profilePage.posts.pop();
    renderEntiredTree(state);
}

export default state