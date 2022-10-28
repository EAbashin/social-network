import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import navbarReducer from "./reducers/navbar-reducer";

const store = {
    _state: {
        navbar: {
            friends: [
                {
                    id: '1',
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
                    name: 'Andrey'
                },
                {
                    id: '2',
                    img: 'https://a.d-cd.net/1a424f2s-960.jpg',
                    name: 'Svetlana'
                },
                {
                    id: '3',
                    img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg',
                    name: 'Petya'
                }
            ]
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
                    message: 'Hi, how are you?',
                    likesCount: 5
                },
                {
                    id: 2,
                    img: 'https://a.d-cd.net/1a424f2s-960.jpg',
                    message: "It's my first post!",
                    likesCount: 15
                },
                {
                    id: 3,
                    img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg',
                    message: "It's our new program! Hey!",
                    likesCount: 10
                }],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Svetlana'},
                {id: 3, name: 'Petya'},
                {id: 4, name: 'Lera'},
                {id: 5, name: 'Lena'},
                {id: 6, name: 'Alex'}
            ],
            messages: [
                {id: 1, img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', name: 'Andrey', message: 'Hi!'},
                {id: 2, img: 'https://a.d-cd.net/1a424f2s-960.jpg', name: 'Svetlana', message: 'How are you?'},
                {id: 3, img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg', name: 'Petya', message: 'Yo!'},
                {id: 4, img: 'https://a.d-cd.net/1a424f2s-960.jpg', name: 'Lera', message: 'Yo!'},
                {id: 5, img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg', name: 'Lena', message: 'Yo!'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
};

export const addBlockActionCreator = (props) => ({type: props.addBlockActiveType});
export const updateNewValueActionCreator = (props, text) => ({
    type: props.updateNewValueTextActiveType, newText: text
});

export default store;

window.store = store;