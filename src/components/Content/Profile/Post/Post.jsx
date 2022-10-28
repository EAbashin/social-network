import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img className={s.avatar} src={props.img} alt="avatar"/>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.like}>{`Like: ${props.likesCount}`}</div>
        </div>
    )
}

export default Post;