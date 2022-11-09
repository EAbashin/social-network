import {authAPI, profileAPI, securityAPI} from "../../api/api";
import {setUserProfile} from "./profile-reducer";

const
    SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA',
    TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING',
    DEL_IS_AUTH = 'auth/DEL_IS_AUTH',
    SET_CAPTCHA = 'SET_CAPTCHA',
    DEL_CAPTCHA = 'DEL_CAPTCHA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
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
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.data.url
            };
        }
        case DEL_CAPTCHA: {
            return {
                ...state,
                captcha: null
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
    delIsAuth = () => ({type: DEL_IS_AUTH}),
    setCaptcha = (data) => ({type: SET_CAPTCHA, data: data}),
    delCaptcha = () => ({type: SET_CAPTCHA});

export const
    getAuthDataThunkCreator = () => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await authAPI.getAuthData();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
            dispatch(delCaptcha());
            profileAPI.getProfile(data.data.id).then(data => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetching(false));
            });
        } else {
            dispatch(toggleIsFetching(false));
        }
    },
    postAuthLoginThunkCreator = (email, password, rememberMe, captcha) => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            const data = await authAPI.postAuthLogin(email, password, rememberMe, captcha);
            if (data.resultCode === 0) {
                dispatch(getAuthDataThunkCreator());
            } else if (data.resultCode === 10) {
                dispatch(getCaptchaThunkCreator())
                dispatch(toggleIsFetching(false));
                return data;
            } else {
                dispatch(toggleIsFetching(false));
                return data;
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
    },
    getCaptchaThunkCreator = () => {
        return async (dispatch) => {
            dispatch(toggleIsFetching(true));
            const data = await securityAPI.getCaptcha();
            dispatch(setCaptcha(data));
            dispatch(toggleIsFetching(false));
        };
    };

export default authReducer;