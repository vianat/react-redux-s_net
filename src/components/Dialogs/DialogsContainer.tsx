import {addMessege,changeMessege,removeMessege} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux'

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

let mapStateToProps = (state: any) => {
    return {
    state: state.dialogsPage
    }
}

let DialogsContainer = connect(mapStateToProps, {addMessege, changeMessege, removeMessege})(Dialogs)

export default DialogsContainer;