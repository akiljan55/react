
import React from "react";
import {AddNewChanges, AddPost} from "../../../../redux/peopleRightMessage-reducer";
import Addendum_post from './addendum_post'

const Addendum_postContainer = (props) => {

    let store = props.store.getState().peopleRightMessage

    let alertAddendum = () => {
        props.store.dispatch(AddPost())
    }
    let addPostChange = (conText) => {
        props.store.dispatch(AddNewChanges(conText))
    }

    return <Addendum_post addPost={alertAddendum} updateAddPostChange={addPostChange}
                           nowPost={store.nowPost}/>
}

export default Addendum_postContainer;
