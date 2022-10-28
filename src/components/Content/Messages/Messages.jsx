import s from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import TextAreaForm from "../common/Forms/TextareaForm/TextareaForm";
import React from "react";


const Messages = (props) => {
    const dialogsElement = props.messagesPage.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>);
    const messagesElement = props.messagesPage.messages.map(m => <Message key={m.id} img={m.img} name={m.name} message={m.message}/>);
    return (
        <div className={s.logo_wrapper}>
            <ul className={s.dialogs}>
                {dialogsElement}
            </ul>
            <div className={s.messages}>
                {messagesElement}
                <TextAreaForm addBlock={props.addBlock} placeholder='your message...'/>
            </div>
        </div>
    )
};

export default Messages;