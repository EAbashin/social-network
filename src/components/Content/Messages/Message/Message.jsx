import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div>
                <img src={props.img} alt="avatar" className={s.avatar}/>
                <h4 className={s.name}>{props.name}</h4>
            </div>
            <div className={s.text}>{props.message}</div>
        </div>
    )
};

export default Message;