import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friends = props.friends.map(friend => <Friend key={friend.id} img={friend.img} name={friend.name}/>);
    return (
        <div className={s.friends}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.wrapper}>
                { friends }
            </div>
        </div>
    )
}

export default Friends;