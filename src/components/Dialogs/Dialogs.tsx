import React from 'react';
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import {dialogType, messegeType} from "../../redux/dialogs-reducer";
import {reduxForm, Field} from 'redux-form';
import {Textarea} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

type dialogsPropsType = {
    dialogs: Array<dialogType>
    messeges: Array<messegeType>
    isAuth: boolean

    addMessege: (newMessegeBody: string) => void,
    removeMessege: () => void;
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogsElements = props.dialogs.map((el) => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messegesElements = props.messeges.map(el => <Messege text={el.text} key={el.id}/>)

    let addNewMessage = (values: any) => {
        props.addMessege(values.newMessegeBody)
    }

    // let deleteMessege = () => props.removeMessege()

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsList}>
                {dialogsElements}
            </div>

            <div className={css.messege}>
                {messegesElements}

                <AddMessegeReduxFormHOC onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(100)
const AddMessegeForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               validate={[requiredField, maxLength10]}
               name="newMessegeBody"
               placeholder="Enter your messege"></Field>
        <Field component="button" name="Add new messege"></Field>
        <Field component="button" name="Delete messege" type={"button"}></Field>
    </form>
}
const AddMessegeReduxFormHOC = reduxForm({form: 'dialogAddMessegeForm'})(AddMessegeForm)

export default Dialogs;