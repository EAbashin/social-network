import {profileAPI} from "../../api/api";

const
    ADD_POST = 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
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
    userProfile: null,
    isFetching: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastPostId = state.posts.length;
            const newPostBlock = {
                id: ++lastPostId,
                img: 'https://raduga.net.ru/wp-content/uploads/2020/08/krutaya-avatarka-devushka.jpg',
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPostBlock]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default: {
            return state;
        }
    }
};

export const
    addPost = (newPost) => ({type: ADD_POST, newPost: newPost}),
    deletePost = (id) => ({type: DELETE_POST, id: id}),
    updateNewValueText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text}),
    toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}),
    setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile: userProfile}),
    setStatus = (status) => ({type: SET_STATUS, status: status});

export const
    getProfileThunkCreator = (userId) => async (dispatch) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
        dispatch(toggleIsFetching(false));
    },
    getStatusThunkCreator = (userId) => async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response));
    },
    updateStatusThunkCreator = (status) => async (dispatch) => {
        const response = await profileAPI.putStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };

export default profileReducer;