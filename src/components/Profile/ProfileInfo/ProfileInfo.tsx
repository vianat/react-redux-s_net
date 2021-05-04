import React from 'react';
import css from './ProfileInfo.module.css'
import {profileStateType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus"

type ProfileInfoPropstype = {
    profile: profileStateType
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoPropstype) => {
    return (
        <div>
            <div>
                <div className={css.bcgrdimg}>
                </div>

                <div className={css.profile_foto}>
                    <img className={css.profile_img} alt = "account" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnOlK_OzBO7JLvLRvLSehkddYklToA9eWpNv7-R_y9CRHrh6rCFsrRq7zZCqZDY1LZaifPuffzDo&usqp=CAc"/>
                </div>

                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;