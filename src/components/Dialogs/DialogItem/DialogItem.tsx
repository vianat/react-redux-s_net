import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './../Dialogs.module.css'

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

export default DialogItem;