import {addMessege, dialogType, messegeType, removeMessege} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux'
import {stateAllType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import React from "react";

// type dialogsPropsType = {
//     store: {
//         dialogs: Array<dialogType>,
//         messeges: Array<messegeType>,
//         newMessegeText: string
//     },
//     dispatch: any
// }

// const DialogsContainer = (props: dialogsPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let addMessege = () => store.dispatch(addMessegeActionCreator());
//                     let changeMessege = (newText: string | undefined) => store.dispatch(updateMessegeTextActionCreator(newText));
//                     let removeMessege = () => store.dispatch(removeLastMessegeActionCreator());
//
//                     return (
//                         <Dialogs
//                             state={store.getState().dialogsPage}
//                             addMessege={addMessege}
//                             changeMessege={changeMessege}
//                             removeMessege={removeMessege}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: stateAllType) => ({
    ...state.dialogsPage,
    isAuth: state.auth.isAuth
})

type AuthRedirectComponentPropsType = {
    dialogs: Array<dialogType>
    messeges: Array<messegeType>
    isAuth: boolean

    addMessege: (newMessegeBody: string) => void,
    removeMessege: () => void;
}
const AuthRedirectComponent = (props: AuthRedirectComponentPropsType) => {
    if (!props.isAuth) return <Redirect to="/login"/>
    return <Dialogs {...props}/>
}

let DialogsContainer = connect(mapStateToProps, {addMessege, removeMessege})(AuthRedirectComponent)

export default DialogsContainer;