import s from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    const followBtnText = props.followed ? 'UNFOLLOW' : 'FOLLOW';
    return (
        <div className={s.user} key={props.id}>
            <div className={s.user__head}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.img} alt="avatar" className={s.avatar}/>
                </NavLink>
                <button disabled={props.followingInProgress.some(id => id === props.id)}
                        onClick={() => props.followThunkCreator(props.followed, props.id)}
                        className={s.btn}>{followBtnText}</button>
            </div>
            <div className={s.user__body}>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.status}>{props.status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>{props.location.country}</div>
                    <div className={s.city}>{props.location.city}</div>
                </div>
            </div>
        </div>
    )
};

export default User;