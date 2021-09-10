import s from './addendum_post.module.css';
import React from "react";
import {AddNewChanges, AddPost} from "../../../../redux/peopleRightMessage-reducer";

const Addendum_post = (props) => {
debugger
    let addendum_text = React.createRef();

    let alertAddendum = () => {
        props.dispatch(AddPost())
    }

    let addPostChange = () => {
        let conText = addendum_text.current.value
        props.dispatch(AddNewChanges(conText))
    }

    return (
        <div className={s.create}>
            <textarea ref={addendum_text} onChange={addPostChange} value={props.nowPost} />
            <button onClick={alertAddendum}>CLICK</button>
        </div>
    )
}

export default Addendum_post;