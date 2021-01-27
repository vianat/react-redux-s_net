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
    _callSubscriber: Function,
    subscribe: Function,
    dispatch: Function
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

        this._state.profilePage= profileReducer(this._state.profilePage, action);
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store