import React from 'react';
import css from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={css.dialogs} >
            <div className={css.dialogsList}>
                <div className={css.dialog + " " + css.active}>
                    Evpatiy
                </div>
                <div className={css.dialog}>
                    Mefodiy
                </div>
                <div className={css.dialog}>
                    Efiopiy
                </div>
                <div className={css.dialog}>
                    Gustav
                </div>
            </div>

            <div>
                <div>start</div>
                <div>messege body</div>
                <div>finish</div>
            </div>
        </div>
    )
}

export default Dialogs;