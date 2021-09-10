import React from "react";
import {AddDialogs, AddDialogsChanges} from "../../../../redux/dialogsMessage-reducer";
import Censuses from "./dialogsInfo";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        nowDialogs: state.nowDialogs,
        messageData: state.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        upDateAddDialogs: () => {
            dispatch(AddDialogs())
        },
        upDateAddDialogsChanges: (text) => {
            dispatch(AddDialogsChanges(text))
        }
    }
}

const CensusesContainer = connect(mapStateToProps, mapDispatchToProps) (Censuses)



export default CensusesContainer;