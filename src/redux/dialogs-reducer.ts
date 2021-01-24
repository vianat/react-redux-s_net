import {dialogType, messegeType} from "./state";

const ADD_MESSEGE = "ADD-MESSEGE";
const UPDATE_MESSEGE_TEXT = "UPDATE-MESSEGE-TEXT";
const REMOVE_LAST_MESSEGE = "REMOVE-LAST-MESSEGE";

type dialogsStateType = {
    dialogs: Array<dialogType>,
    messeges: Array<messegeType>,
    newMessegeText: string
}

const dialogsReducer = (state: dialogsStateType, action: any) => {
    switch (action.type) {
        case ADD_MESSEGE:
            let addMessege = {
                id: state.messeges[state.messeges.length - 1].id++,
                text: state.newMessegeText
            }
            state.messeges.push(addMessege);
            state.newMessegeText = "";
            return state;
        case UPDATE_MESSEGE_TEXT:
            state.newMessegeText = action.text;
            return state;
        case REMOVE_LAST_MESSEGE:
            state.messeges.pop();
            return state;
        default :
            return state;
    }
}

export const addMessegeActionCreator = () => ({type: ADD_MESSEGE})
export const updateMessegeTextActionCreator = (newText: string | undefined) => {
    return {type: UPDATE_MESSEGE_TEXT, text: newText}
}
export const removeLastMessegeActionCreator = () => ({type:REMOVE_LAST_MESSEGE})

export default dialogsReducer;