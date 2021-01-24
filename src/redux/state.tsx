import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
export type storeType = {
    _state: stateType,
    getState: Function,
    renderEntireTree: Function,
    addMessege: Function,
    updateMessegeText: Function,
    removeLastMessege: Function,
    addPost: Function,
    updatePostText: Function,
    removeLastPost: Function,
    subscribe: Function,
}

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "first post", likesCount: 0},
                {id: 2, text: "tik-tok dno", likesCount: 177},
                {id: 3, text: "мамкин программист", likesCount: 62}
            ],
            newPostText: ""
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
            newMessegeText: ""
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber(state: stateType) {
        console.log("state changed")
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: any){

        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage= profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}

export default store
// if(action.type === ADD_MESSEGE){
//     let addMessege = {
//         id: this._state.dialogsPage.messeges[this._state.dialogsPage.messeges.length-1].id++,
//         text: this._state.dialogsPage.newMessegeText
//     }
//     this._state.dialogsPage.messeges.push(addMessege);
//     this._state.dialogsPage.newMessegeText = "";
//     this._callSubscriber(this._state)
// }
// if(action.type === UPDATE_MESSEGE_TEXT){
//     this._state.dialogsPage.newMessegeText = action.text;
//     this._callSubscriber(this._state)
// }
// if(action.type === REMOVE_LAST_MESSEGE){
//     this._state.dialogsPage.messeges.pop();
//     this._callSubscriber(this._state)
// }
//
// if(action.type === ADD_POST){
//     let addPost = {
//         id: this._state.profilePage.posts[this._state.profilePage.posts.length-1].id++,
//         text: this._state.profilePage.newPostText,
//         likesCount: 0,
//     }
//     this._state.profilePage.posts.push(addPost);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state)
// }
// if(action.type === UPDATE_POST_TEXT){
//     this._state.profilePage.newPostText = action.text;
//     this._callSubscriber(this._state)
// }
// if(action.type === REMOVE_LAST_POST){
//     this._state.profilePage.posts.pop();
//     this._callSubscriber(this._state)
// }

// addMessege() {
//     let addMessege = {
//         id: 4,
//         text: this._state.dialogsPage.newMessegeText
//     }
//     this._state.dialogsPage.messeges.push(addMessege);
//     this._state.dialogsPage.newMessegeText = "";
//     this._callSubscriber(this._state)
// },
// updateMessegeText(text: string) {
//     this._state.dialogsPage.newMessegeText = text;
//     this._callSubscriber(this._state)
// },
// removeLastMessege() {
//     this._state.dialogsPage.messeges.pop();
//     this._callSubscriber(this._state)
// },
//
// addPost() {
//     let addPost = {
//         id: 4,
//         text: this._state.profilePage.newPostText,
//         likesCount: 0,
//     }
//     this._state.profilePage.posts.push(addPost);
//     this._state.profilePage.newPostText = "";
//     this._callSubscriber(this._state)
// },
// updatePostText(text: string) {
//     this._state.profilePage.newPostText = text;
//     this._callSubscriber(this._state)
// },
// removeLastPost() {
//     this._state.profilePage.posts.pop();
//     this._callSubscriber(this._state)
// }

// let renderEntireTree = (state: stateType) => {
//     console.log("state changed")
// }
//
//
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, text: "first post", likesCount: 0},
//             {id: 2, text: "tik-tok dno", likesCount: 177},
//             {id: 3, text: "мамкин программист", likesCount: 62}
//         ],
//         newPostText: "Type new post"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Fufeliy"},
//             {id: 2, name: "Evpatiy"},
//             {id: 3, name: "Mefodiy"},
//             {id: 4, name: "Efiopiy"},
//             {id: 5, name: "Gustav"}
//         ],
//         messeges: [
//             {id: 1, text: "Hi friend"},
//             {id: 2, text: "What is going on here?"},
//             {id: 3, text: "Is it react? really?"},
//             {id: 4, text: "Nice !!!"}
//         ],
//         newMessegeText: "Type new messege"
//     }
// }
//
// export let addMessege = () => {
//     let addMessege = {
//         id: 4,
//         text: state.dialogsPage.newMessegeText
//     }
//     state.dialogsPage.messeges.push(addMessege);
//     state.dialogsPage.newMessegeText = "";
//     renderEntireTree(state)
// }
// export let updateMessegeText = (text: string) => {
//     state.dialogsPage.newMessegeText = text;
//     renderEntireTree(state)
// }
// export let removeLastMessege = () => {
//     state.dialogsPage.messeges.pop();
//     renderEntireTree(state)
// }
// export let addPost = () => {
//     let addPost = {
//         id: 4,
//         text: state.profilePage.newPostText,
//         likesCount: 0,
//     }
//     state.profilePage.posts.push(addPost);
//     state.profilePage.newPostText = "";
//     renderEntireTree(state)
// }
// export let updatePostText = (text: string) => {
//     state.profilePage.newPostText = text;
//     renderEntireTree(state)
// }
// export let removeLastPost = () => {
//     state.profilePage.posts.pop();
//     renderEntireTree(state)
// }
//
// export const subscribe = (observer: any) => {
//     renderEntireTree = observer;
// }
//
// export default state
