import {authAPI, profileAPI} from "../../api/api";
import {setUserProfile} from "./profile-reducer";

const
    SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA',
    TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING',
    DEL_IS_AUTH = 'auth/DEL_IS_AUTH';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case DEL_IS_AUTH: {
            return {
                isAuth: false,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};

export const
    setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data: data}),
    toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}),
    delIsAuth = () => ({type: DEL_IS_AUTH});

export const
    getAuthDataThunkCreator = () => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await authAPI.getAuthData();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
            profileAPI.getProfile(data.data.id).then(data => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetching(false));
            });
        } else {
            dispatch(toggleIsFetching(false));
        }
    },
    postAuthLoginThunkCreator = (email, password, rememberMe) => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            const data = await authAPI.postAuthLogin(email, password, rememberMe);
            if (data.resultCode === 0) {
                dispatch(getAuthDataThunkCreator());
            } else {
                dispatch(toggleIsFetching(false));
            }
        };
    },
    deleteAuthLoginThunkCreator = () => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            const data = await authAPI.deleteAuthLogin();
            if (data.resultCode === 0) {
                dispatch(delIsAuth());
                dispatch(toggleIsFetching(false));
                dispatch(getAuthDataThunkCreator());
            } else {
                dispatch(toggleIsFetching(false));
            }
        };
    };

export default authReducer;