import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className="friend">
            <img src={props.img} alt="avatar" className={s.avatar}/>
            <h4 className={s.name}>{props.name}</h4>
        </div>
    )
};

export default Friend;