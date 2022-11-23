// @ts-ignore
import {authAPI, profileAPI, securityAPI} from "../../api/api";
import {UserProfileType} from "../../types/types";
import {setUserProfile} from "./profile-reducer";

const
    SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA',
    TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING',
    DEL_IS_AUTH = 'auth/DEL_IS_AUTH',
    SET_CAPTCHA = 'auth/SET_CAPTCHA',
    DEL_CAPTCHA = 'auth/DEL_CAPTCHA';

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    isFetching: false,
    captcha: null as null | string
};
type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
                id2: 12345
            };
        }
        case DEL_IS_AUTH: {
            return {
                ...initialState,
                isAuth: false
            };
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captchaUrl
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

type SetAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA
    data: DataType
};
type DataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
};
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
};
type SetCaptchaType = {
    type: typeof SET_CAPTCHA
    captchaUrl: string
};
type DelIsAuthType = { type: typeof DEL_IS_AUTH };
type DelCaptchaType = { type: typeof DEL_CAPTCHA };
export const
    setAuthUserData = (data: DataType): SetAuthUserDataType => ({type: SET_AUTH_USER_DATA, data: data}),
    toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}),
    setCaptcha = (captchaUrl: string): SetCaptchaType => ({type: SET_CAPTCHA, captchaUrl: captchaUrl}),
    delIsAuth = (): DelIsAuthType => ({type: DEL_IS_AUTH}),
    delCaptcha = (): DelCaptchaType => ({type: DEL_CAPTCHA});

export const
    getAuthDataThunkCreator = () => async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        const data = await authAPI.getAuthData();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
            dispatch(delCaptcha());
            profileAPI.getProfile(data.data.id).then((data: UserProfileType) => {
                dispatch(setUserProfile(data));
                dispatch(toggleIsFetching(false));
            });
        } else {
            dispatch(toggleIsFetching(false));
        }
    },
    postAuthLoginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => {
        return async (dispatch: any) => {
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
        return async (dispatch: any) => {
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
        return async (dispatch: any) => {
            dispatch(toggleIsFetching(true));
            const data = await securityAPI.getCaptcha();
            dispatch(setCaptcha(data.url));
            dispatch(toggleIsFetching(false));
        };
    };

export default authReducer;