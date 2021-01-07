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
    let dialogsData = [
        {id: 1, name: "Fufeliy"},
        {id: 2, name: "Evpatiy"},
        {id: 3, name: "Mefodiy"},
        {id: 4, name: "Efiopiy"},
        {id: 5, name: "Gustav"}
    ]
    let messegesData = [
        {id: 1, text: "Hi friend"},
        {id: 2, text: "Wath is going on here?"},
        {id: 3, text: "Is it react? really?"},
        {id: 4, text: "Nice !!!"}
    ]

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsList}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>

            <div className={css.messege}>
                <Messege text={messegesData[0].text}/>
                <Messege text={messegesData[1].text}/>
                <Messege text={messegesData[2].text}/>
                <Messege text={messegesData[3].text}/>
            </div>
        </div>
    )
}
export default Dialogs;