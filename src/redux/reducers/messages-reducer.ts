const
    ADD_MESSAGE = 'messages/ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'messages/UPDATE_NEW_MESSAGE_TEXT';

type DialogsType = {
    id: number
    name: string
};
type MessagesType = {
    id: number
    img: string
    name: string
    message: string
};

const initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Alex'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', name: 'Andrey', message: 'Hi!'},
        {id: 2, img: 'https://a.d-cd.net/1a424f2s-960.jpg', name: 'Svetlana', message: 'How are you?'},
        {id: 3, img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg', name: 'Petya', message: 'Yo!'},
        {id: 4, img: 'https://a.d-cd.net/1a424f2s-960.jpg', name: 'Lera', message: 'Yo!'},
        {id: 5, img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg', name: 'Lena', message: 'Yo!'}
    ] as Array<MessagesType>,
    newMessageText: null as null | string
};
type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let lastMessageId = state.messages.length;
            const newMessageBlock = {
                id: ++lastMessageId,
                img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg',
                name: 'Lena',
                message: action.newMessage
            };
            return {
                ...state,
                messages: [...state.messages, newMessageBlock],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

type AddMessageType = {
    type: typeof ADD_MESSAGE,
    newMessage: string
};
type UpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    newText: string
};
export const
    addMessage = (newMessage: string):AddMessageType => ({
        type: ADD_MESSAGE,
        newMessage: newMessage
    }),
    updateNewMessage = (text: string):UpdateNewMessageType => ({
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    });

export default messagesReducer;