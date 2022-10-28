import s from './ProfileStatus.module.css';
import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const
        [editMode, setEditMode] = useState(false),
        [status, setStatus] = useState(props.status);

    useEffect(() => {setStatus(props.status)}, [props.status]);

    const activateEditMod = () => {
            setEditMode(true);
        },
        deActivateEditMod = () => {
            props.updateStatusThunkCreator(status);
            setEditMode(false);
        },
        onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        };
    return (
        <div className={s.wrapper}>
            {
                !editMode
                    ? <h3 className={s.status} onClick={activateEditMod}>{props.status ? props.status : 'no status'}</h3>
                    : <input className={s.input} value={status} autoFocus={true} onBlur={deActivateEditMod}
                             onChange={onStatusChange} type="text"/>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;