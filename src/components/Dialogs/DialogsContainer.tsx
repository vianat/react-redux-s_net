import React from 'react';
import {
    addMessegeActionCreator,
    removeLastMessegeActionCreator,
    updateMessegeTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type dialogsPropsType = {
    // store: {
    //     dialogs: Array<dialogType>,
    //     messeges: Array<messegeType>,
    //     newMessegeText: string
    // },
    // dispatch: any
}

const DialogsContainer = (props: dialogsPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let addMessege = () => store.dispatch(addMessegeActionCreator());
                    let changeMessege = (newText: string | undefined) => store.dispatch(updateMessegeTextActionCreator(newText));
                    let removeMessege = () => store.dispatch(removeLastMessegeActionCreator());

                    return (
                        <Dialogs
                            state={store.getState().dialogsPage}
                            addMessege={addMessege}
                            changeMessege={changeMessege}
                            removeMessege={removeMessege}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;