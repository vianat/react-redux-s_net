import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {dialogType, messegeType} from "../../redux/state";


type dialogsPropsType = {
    state:{
        dialogs: Array<dialogType>,
        messeges: Array<messegeType>
    }

}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((el)=> <DialogItem name={el.name} id={el.id} />)
    let messegesElements = props.state.messeges.map(el => <Messege text={el.text}/>)

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