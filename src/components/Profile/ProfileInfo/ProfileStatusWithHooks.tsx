import React, {ChangeEvent, useEffect, useState} from 'react';
import css from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => setEditMode(true)
    let deactivateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateStatus(status)
        setEditMode(false)
    }
    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return (
        <div className={css.profile_info}>

            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>--- {status || "No status"} ---</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status}
                       autoFocus={true}
                       type="text"
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}/>
            </div>
            }

            <div>Name</div>
            <div>DOB</div>
            <div>CITY</div>
            <div>Edu</div>
            <div>Web</div>
        </div>
    )
}

export default ProfileStatusWithHooks;