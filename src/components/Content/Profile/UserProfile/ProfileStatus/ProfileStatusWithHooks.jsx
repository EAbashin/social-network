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
                !editMode && props.isOwner
                    ? <h4 className={s.status} onClick={activateEditMod}>{props.status ? props.status : 'change status'}</h4>
                    : editMode && props.isOwner
                        ? <input className={s.input} value={status} autoFocus={true} onBlur={deActivateEditMod}
                             onChange={onStatusChange} type="text"/>
                        : <h4 className={s.status} >{props.status ? props.status : 'no status'}</h4>
            }

        </div>
    )
}

export default ProfileStatusWithHooks;