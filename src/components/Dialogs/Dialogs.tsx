import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {dialogType, messegeType} from "../../index";

type dialogsPropsType = {
    dialogs: Array<dialogType>,
    messeges: Array<messegeType>
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.dialogs.map((el)=> <DialogItem name={el.name} id={el.id} />)
    let messegesElements = props.messeges.map(el => <Messege text={el.text}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsList}>
                {dialogsElements}
            </div>

            <div className={css.messege}>
                {messegesElements}
            </div>
        </div>
    )
}
export default Dialogs;