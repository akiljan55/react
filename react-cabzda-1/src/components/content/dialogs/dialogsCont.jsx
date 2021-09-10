
import s from './dialogsCont.module.css';
import DialogMenu from './dialogeMenu/dialogsMenu';
import CensusesContainer from "./dialogsInfo/dialogsInfoContainer";

const DialogsCont = (props) => {

    return (
        <div className={s.dialogs}>
        <DialogMenu dialogsData={props.dialogsData} />
    <CensusesContainer/>
</div>
)
}

export default DialogsCont;