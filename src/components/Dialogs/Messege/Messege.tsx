import React from 'react';

type messegeType = {
    text: string;
}
const Messege = (props: messegeType) => {
    return (
        <div>{props.text}</div>
    )
}

export default Messege;