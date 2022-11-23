type InitialStateType = typeof initialState;
const initialState = {
    friends: [
        {
            id: 1,
            img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
            name: 'Andrey'
        },
        {
            id: 2,
            img: 'https://a.d-cd.net/1a424f2s-960.jpg',
            name: 'Svetlana'
        },
        {
            id: 3,
            img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg',
            name: 'Petya'
        }
    ]
};

const navbarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
};

export default navbarReducer;