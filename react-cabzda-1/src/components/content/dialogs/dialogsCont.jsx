
import s from './dialogsCont.module.css';
import Censuses from './dialogsInfo/dialogsInfo';
import DialogMenu from './dialogeMenu/dialogsMenu';

const DialogsCont = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogMenu dialogsData={props.dialogsData} />
            <Censuses messageData={props.messageData} />
        </div>
    )
}

export default DialogsCont;