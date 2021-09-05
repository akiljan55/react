import React from "react";
import s from "./dialogsInfo.module.css";

const Message = (props) => {

    return <div>{props.messange}</div>
}


const Censuses = (props) => {

let messageElement = props.messageData.map( m => <Message messange= {m.message} />)

let newText = React.createRef();

let alertPost = () =>{
    let text = newText.current.value
    alert(text)
}

    return(
        <div className={s.dialog}>
            {messageElement}
            <textarea ref={newText}></textarea><br />
            <button onClick={alertPost} >Play</button>
        </div>
    )
}

export default Censuses;