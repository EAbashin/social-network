// @ts-ignore
import {profileAPI} from "../../api/api";
import {PhotosType, UserProfileType, PostType} from "../../types/types"

const
    ADD_POST = 'profile/ADD_POST',
    DELETE_POST = 'profile/DELETE_POST',
    TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING',
    SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
    SET_STATUS = 'profile/SET_STATUS',
    SAVE_PROFILE = 'profile/SAVE_PROFILE',
    UPDATE_NEW_POST_TEXT = 'profile/UPDATE_NEW_POST_TEXT',
    SAVE_PHOTO = 'profile/SAVE_PHOTO';

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
        }] as Array<PostType>,
    userProfile: null as null | UserProfileType,
    isFetching: true,
    status: '',
    newPostText: null as null | string
};
type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any):InitialStateType => {
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
        case SAVE_PROFILE: {
            return {
                ...state,
                userProfile: {...action.userProfile}
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
        case SAVE_PHOTO: {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
            };
        }
        default: {
            return state;
        }
    }
};

type AddPostType = {
    type: typeof ADD_POST
    newPost: string
};
type DeletePostType = {
    type: typeof DELETE_POST
    id: number
};
type UpdateNewValueTextType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
};
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
};
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    userProfile: UserProfileType
};
type SetStatusType = {
    type: typeof SET_STATUS
    status: string
};
type SaveProfileType = {
    type: typeof SAVE_PROFILE
    userProfile: UserProfileType
};
type SavePhotoType = {
    type: typeof SAVE_PHOTO
    photos: PhotosType
};
export const
    addPost = (newPost: string): AddPostType => ({type: ADD_POST, newPost: newPost}),
    deletePost = (id: number): DeletePostType => ({type: DELETE_POST, id: id}),
    updateNewValueText = (text: string): UpdateNewValueTextType => ({type: UPDATE_NEW_POST_TEXT, newText: text}),
    toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}),
    setUserProfile = (userProfile: UserProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, userProfile: userProfile}),
    setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status: status}),
    saveProfile = (profile: UserProfileType): SaveProfileType => ({type: SAVE_PROFILE, userProfile: profile}),
    savePhoto = (photos: PhotosType): SavePhotoType => ({type: SAVE_PHOTO, photos: photos});

export const
    getProfileThunkCreator = (userId: number) => async (dispatch: any) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
        dispatch(toggleIsFetching(false));
    },
    updateProfileThunkCreator = (profile: UserProfileType) => async (dispatch: any) => {
        const response = await profileAPI.putProfile(profile);
        if (response.resultCode === 0) {
            dispatch(saveProfile(profile));
        }
        return response;
    },
    getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response));
    },
    updateStatusThunkCreator = (status: string) => async (dispatch: any) => {
        const response = await profileAPI.putStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    },
    savePhotoThunkCreator = (file: any) => async (dispatch: any) => {
        const response = await profileAPI.putPhoto(file);
        if (response.resultCode === 0) {
            dispatch(savePhoto(response.data.photos));
        }
    };

export default profileReducer;