import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Fufeliy"},
        {id: 2, name: "Evpatiy"},
        {id: 3, name: "Mefodiy"},
        {id: 4, name: "Efiopiy"},
        {id: 5, name: "Gustav"}
    ]
    let messeges = [
        {id: 1, text: "Hi friend"},
        {id: 2, text: "Wath is going on here?"},
        {id: 3, text: "Is it react? really?"},
        {id: 4, text: "Nice !!!"}
    ]

    let dialogsElements = dialogs.map((el)=> <DialogItem name={el.name} id={el.id} />)
    let messegesElements = messeges.map(el => <Messege text={el.text}/>)

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