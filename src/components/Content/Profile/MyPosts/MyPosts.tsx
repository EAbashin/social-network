import TextAreaForm from "../../common/Forms/TextareaForm/TextareaForm";
import Post from "../Post/Post";
import React from "react";

type PostType = {
    id: number
    img: string
    message: string
    likesCount: number
}
export type MyPostType = {
    posts: Array<PostType>
    addPost: (newPost: string) => void
}
const MyPosts: React.FC<MyPostType> = React.memo((props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} img={p.img} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div>
            <h3>My posts</h3>
            <div>
                {postsElements}
                <TextAreaForm addBlock={props.addPost} placeholder='your news...'/>
            </div>
        </div>
    )
});

export default MyPosts;