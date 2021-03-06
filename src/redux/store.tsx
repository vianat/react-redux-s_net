import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {userType} from "./users-reducer";

// export type storeType = {
//     _state: stateType,
//     getState: Function,
//     _callSubscriber: Function,
//     subscribe: Function,
//     dispatch: Function
// }
// export type stateType = {
//     profilePage: profileStateType,
//     dialogsPage: dialogsStateType,
//     users: Array<userType>
// }

// export type profileType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string | null
//     fullName: string
//     contacts: ContactsType
//     photos: PhotosType
// }
// export type ContactsType = {
//     github: string | null
//     vk: string | null
//     facebook: string | null
//     instagram: string | null
//     twitter: string | null
//     website: string | null
//     youtube: string | null
//     mainLink: string | null
// }
// export type PhotosType = { small: string, large: string }
//
// export type profileStateType = {
//     posts: Array<postType>,
//     newPostText: string,
//     profile: profileType
// }
// export type postType = {
//     id: number,
//     text: string
//     likesCount: number
// }

// export type dialogsStateType = {
//     dialogs: Array<dialogType>,
//     messeges: Array<messegeType>,
//     newMessegeText: string
// }
// export type dialogType = {
//     id: number,
//     name: string
// }
// export type messegeType = {
//     id: number,
//     text: string
// }

// let store = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, text: "first post", likesCount: 0},
//                 {id: 2, text: "tik-tok dno", likesCount: 177},
//                 {id: 3, text: "мамкин программист", likesCount: 62}
//             ],
//             newPostText: "",
//             profile: {
//                 userId: 1,
//                 lookingForAJob: true,
//                 lookingForAJobDescription: "text",
//                 fullName: "fuf",
//                 contacts: {
//                     github: "one",
//                     vk: "one",
//                     facebook: "one",
//                     instagram: "one",
//                     twitter: "one",
//                     website: "one",
//                     youtube: "one",
//                     mainLink: "one"
//                 },
//                 photos: {
//                     small: "string", large: "string"
//                 }
//             }
//         },
//         // dialogsPage: {
//         //     dialogs: [
//         //         {id: 1, name: "Fufeliy"},
//         //         {id: 2, name: "Evpatiy"},
//         //         {id: 3, name: "Mefodiy"},
//         //         {id: 4, name: "Efiopiy"},
//         //         {id: 5, name: "Gustav"}
//         //     ],
//         //     messeges: [
//         //         {id: 1, text: "Hi friend"},
//         //         {id: 2, text: "What is going on here?"},
//         //         {id: 3, text: "Is it react? really?"},
//         //         {id: 4, text: "Nice !!!"}
//         //     ],
//         //     newMessegeText: ""
//         // },
//         // users: [
//         //     {id: 1, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
//         //         followed: false, name: "Masha", status: "the boss",  location:{city: "Sacramento", country: "USA"}},
//         //     {id: 2, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
//         //         followed: true,  name: "Dasha", status: "the fufel", location:{city: "Boston", country: "USA"}},
//         //     {id: 3, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
//         //         followed: false, name: "Pasha", status: "the mufel", location:{city: "Denwer", country: "USA"}}
//         // ]
//     },
//
//     getState() {return this._state},
//     _callSubscriber(state: stateType) {console.log("state was changing")},
//     subscribe(observer: any) { this._callSubscriber = observer;},
//
//     dispatch(action: any){
//
//         this._state.profilePage= profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
//
//         this._callSubscriber(this._state);
//     }
// }

// export default store