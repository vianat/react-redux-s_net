import React from 'react';

type MessegeType = {
    text: string;
}
const Messege = (props: MessegeType) => {
    return (
        <div>{props.text}</div>
    )
}

export default Messege;