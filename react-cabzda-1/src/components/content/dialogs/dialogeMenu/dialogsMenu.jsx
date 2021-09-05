import s from './dialogsMenu.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className ={s.ggg}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const DialogMenu = (props) => {


let dialogElement = props.dialogsData.map( d =>  <DialogItem name={d.name} id={d.id} />)

    return(
        <div className={s.dialogs_mini}>
                <p>{dialogElement}</p>
            </div>
    )
}

export default DialogMenu;
