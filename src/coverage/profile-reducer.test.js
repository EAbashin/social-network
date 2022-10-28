import profileReducer, {addPost, deletePost} from "../redux/reducers/profile-reducer";

const state = {
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
        }]
};

test('length of posts should be incremented', () => {
    const
        action = addPost('myNewPost'),
        newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {
    const
        action = addPost('myNewPost'),
        newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('myNewPost');
});

test('id of new post should be correct', () => {
    const
        action = addPost('myNewPost'),
        newState = profileReducer(state, action);
    expect(newState.posts[3].id).toBe(4);
});

test('length of posts should be decremented', () => {
    const
        action = deletePost(1),
        newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

test('length of posts shouldn`n be decremented if id is incorrect', () => {
    const
        action = deletePost(7),
        newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});