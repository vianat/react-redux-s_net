import React from 'react';
import css from './Post.module.css'

type propsType = {
    message: string,
    likes: number
}

const Post = (props: propsType) => {
    return (
        <div className={css.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"/>
            {props.message}
            <span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDL2rvTHoDy5DNDU5cvblN69SEii9XXd5UA&usqp=CAU"/>
            </span> {props.likes}
        </div>
    )
}

export default Post;