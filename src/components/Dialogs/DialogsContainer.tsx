import React from 'react';
import {
    addMessegeActionCreator,
    removeLastMessegeActionCreator,
    updateMessegeTextActionCreator
} from "../../redux/dialogs-reducer";
import {dialogType, messegeType} from "../../redux/store";
import Dialogs from "./Dialogs";

type dialogsPropsType = {
    store: {
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>,
        newMessegeText: string
    },
    dispatch: any
}

const DialogsContainer = (props: dialogsPropsType) => {

    let addMessege = () =>  props.dispatch(addMessegeActionCreator());
    let changeMessege = (newText: string | undefined) =>  props.dispatch(updateMessegeTextActionCreator(newText));
    let removeMessege = () =>  props.dispatch(removeLastMessegeActionCreator());

    return (
        <Dialogs
            state={props.store}
            addMessege={addMessege}
            changeMessege={changeMessege}
            removeMessege={removeMessege}
        />
    )
}
export default DialogsContainer;