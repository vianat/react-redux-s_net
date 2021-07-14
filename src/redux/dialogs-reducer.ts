const ADD_MESSEGE = "ADD-MESSEGE";
const REMOVE_LAST_MESSEGE = "REMOVE-LAST-MESSEGE";

export type dialogsStateType = {
    dialogs: Array<dialogType>,
    messeges: Array<messegeType>,
}
export type dialogType = {
    id: number,
    name: string
}
export type messegeType = {
    id: number,
    text: string
}

let initialState = {
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

const dialogsReducer = (state: dialogsStateType = initialState, action: any) => {

    let stateCopy; // работаем с копией стейта обязательно

    switch (action.type) {
        case ADD_MESSEGE: {
            let addMessege = {
                id: state.messeges[state.messeges.length - 1].id++,
                text: action.newMessegeBody
            }
            stateCopy = {
                ...state,
                messeges: [...state.messeges, addMessege]
            } // копируем собщения + пушим новое

            return stateCopy;
        }

        case REMOVE_LAST_MESSEGE: {
            stateCopy = {...state}
            stateCopy.messeges.pop();
            return stateCopy;
        }

        default :
            return state;
    }
}

export const addMessege = (newMessegeBody: string) => ({type: ADD_MESSEGE, newMessegeBody})
export const removeMessege = () => ({type: REMOVE_LAST_MESSEGE})

export default dialogsReducer;