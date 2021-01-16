import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {dialogType, messegeType} from "../../redux/state";

type dialogsPropsType = {
    state:{
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>,
        newMessegeText: string
    },
    addMessege: Function,
    updateMessegeText: Function,
    removeLastMessege: Function
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((el)=> <DialogItem name={el.name} id={el.id} />)
    let messegesElements = props.state.messeges.map(el => <Messege text={el.text}/>)

    let newMessege = React.createRef<HTMLTextAreaElement>();

    let addNewMessege = () => {
        props.addMessege();
    }
    let changeMessege = () => {
        let newText = newMessege.current?.value;
        props.updateMessegeText(newText);
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
                <button onClick={()=>{props.removeLastMessege()}}>Delete messege</button>
            </div>

        </div>
    )
}
export default Dialogs;