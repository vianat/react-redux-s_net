import React from 'react';
import css from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <div className={css.bcgrdimg}>
                </div>

                <div className={css.profile_foto}>
                    <img alt = "account" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnOlK_OzBO7JLvLRvLSehkddYklToA9eWpNv7-R_y9CRHrh6rCFsrRq7zZCqZDY1LZaifPuffzDo&usqp=CAc"/>
                </div>

                <div className={css.profile_info}>
                    <div>Name</div>
                    <div>DOB</div>
                    <div>CITY</div>
                    <div>Edu</div>
                    <div>Web</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;