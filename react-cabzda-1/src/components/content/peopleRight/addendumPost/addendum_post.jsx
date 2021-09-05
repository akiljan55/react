import s from './addendum_post.module.css';
import contentText from "../../contentRight/contentText";
import React from "react";

const Addendum_post = () => {

    let addendum_text = React.createRef();

    let alertAddendum = () => {
        let conText = addendum_text.current.value
        alert(conText)
    }

    return (
        <div className={s.create}>
            <textarea ref={addendum_text}></textarea>
            <button onClick={alertAddendum}>TO CREATE</button>
        </div>
    )
}

export default Addendum_post;