export type postType = {
    id: number,
    text: string,
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
            {id: 1, text: "hi its first post", likesCount: 0},
            {id: 2, text: "tiktok gavno", likesCount: 177},
            {id: 3, text: "you are fufel!", likesCount: 62}
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

export default state