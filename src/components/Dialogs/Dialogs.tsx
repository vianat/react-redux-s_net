import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {dialogType, messegeType} from "../../redux/dialogs-reducer";

type dialogsPropsType = {
    state:{
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>,
        newMessegeText: string
    },
    addMessege: () => void,
    changeMessege: (newText: string | undefined) => void,
    removeMessege: () => void;
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((el)=> <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messegesElements = props.state.messeges.map(el => <Messege text={el.text} key={el.id}/>)

    let newMessege = React.createRef<HTMLTextAreaElement>();

    let addNewMessege = () => props.addMessege()
    let editMessege = () => {
        let newText = newMessege.current?.value;
        props.changeMessege(newText);
    }
    let deleteMessege = () =>  props.removeMessege()

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsList}>
                {dialogsElements}
            </div>

            <div className={css.messege}>
                {messegesElements}

                <textarea placeholder={"Enter your messege"} ref={newMessege} onChange={editMessege} value={props.state.newMessegeText}/>
                <button onClick={addNewMessege}>Write new messege</button>
                <button onClick={()=>{deleteMessege()}}>Delete messege</button>
            </div>
        </div>
    )
}
export default Dialogs;