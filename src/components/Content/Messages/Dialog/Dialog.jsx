import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <li className={s.dialog}><NavLink to={`/messages/${props.id}`}>{props.name}</NavLink></li>
    )
};

export default Dialog;