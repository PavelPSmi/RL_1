import React from 'react';


function Message(props) {
    console.log(props)
    return (
        <h1>
            Первое знакомство с React для {props.name}
        </h1>
    )
}

export default Message;