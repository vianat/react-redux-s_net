import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './../Dialogs.module.css'

type MessegeType = {
    text: string;
}
const Messege = (props: MessegeType) => {
    return (
        <div>{props.text}</div>
    )
}

export default Messege;