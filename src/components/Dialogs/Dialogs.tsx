import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialogs.module.css'

type DialogItemType = {
    id: number;
    name: string;
}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={css.dialog + " " + css.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessegeType = {
    text: string;
}
const Messege = (props: MessegeType) => {
    return (
        <div>{props.text}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsList}>

                <DialogItem id={1} name="Evpatiy"/>
                <DialogItem id={2} name="Mefodiy"/>
                <DialogItem id={3} name="Efiopiy"/>
                <DialogItem id={4} name="Gustav"/>
            </div>

            <div className={css.messege}>
                <Messege text={"Hi friend"}/>
                <Messege text={"Wath is going on here?"}/>
                <Messege text={"Is it react? really?"}/>
                <Messege text={"Nice !!!"}/>
            </div>
        </div>
    )
}
export default Dialogs;