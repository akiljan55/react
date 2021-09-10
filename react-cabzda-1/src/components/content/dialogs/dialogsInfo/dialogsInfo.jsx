import React from "react";
import s from "./dialogsInfo.module.css";

const Message = (props) => {

    return <div>{props.messange}</div>
}


const Censuses = (props) => {
   debugger
let messageElement = props.messageData.map( m => <Message messange= {m.message} />)

let newAddText = React.createRef();

let alertPost = () =>{
    props.upDateAddDialogs()
}
let alertChange = () => {
    let text = newAddText.current.value
    props.upDateAddDialogsChanges(text)
}

    return(
        <div className={s.dialog}>
            {messageElement}
            <textarea ref={newAddText} onChange={alertChange} value={props.nowDialogs} /><br />
            <button onClick={alertPost} >Send</button>
        </div>
    )
}

export default Censuses;