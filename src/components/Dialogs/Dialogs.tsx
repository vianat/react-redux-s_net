import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {
    addMessegeActionCreator,
    dialogType,
    messegeType,
    removeLastMessegeActionCreator,
    updateMessegeTextActionCreator
} from "../../redux/state";

type dialogsPropsType = {
    state:{
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>,
        newMessegeText: string
    },
    dispatch: any
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((el)=> <DialogItem name={el.name} id={el.id} />)
    let messegesElements = props.state.messeges.map(el => <Messege text={el.text}/>)

    let newMessege = React.createRef<HTMLTextAreaElement>();

    let addNewMessege = () => {
        props.dispatch( addMessegeActionCreator() );
    }
    let changeMessege = () => {
        let newText = newMessege.current?.value;
        props.dispatch( updateMessegeTextActionCreator(newText) );
    }
    let removeMessege = () => {
        props.dispatch( removeLastMessegeActionCreator() );
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsList}>
                {dialogsElements}
            </div>

            <div className={css.messege}>
                {messegesElements}

                <textarea ref={newMessege} onChange={changeMessege} value={props.state.newMessegeText}/>
                <button onClick={addNewMessege}>Write new messege</button>
                <button onClick={()=>{removeMessege()}}>Delete messege</button>
            </div>
        </div>
    )
}
export default Dialogs;