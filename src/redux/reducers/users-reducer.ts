// @ts-ignore
import {usersAPI} from "../../api/api";
import {UserType} from "../../types/types";

const
    TOGGLE_FOLLOW = 'user/TOGGLE_FOLLOW',
    TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS',
    SET_USERS = 'user/SET_USERS',
    SET_TOTAL_USERS_COUNT = 'user/SET_TOTAL_USERS_COUNT',
    UP_CURRENT_PAGE = 'user/UP_CURRENT_PAGE',
    SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE',
    ADD_USERS = 'user/ADD_USERS';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    portionSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // Array of users ids
};
type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    } else {
                        return u;
                    }
                })
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            };
        }
        case SET_USERS: {
            return {
                // ...state, users: [...state.users, ...action.users]
                ...state, users: [...action.users]
            };
        }
        case ADD_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            };
        }
        case UP_CURRENT_PAGE: {
            return {
                ...state, currentPage: ++action.currentPage
            };
        }
        default:
            return state;
    }
};
type ToggleFollowType = {
    type: typeof TOGGLE_FOLLOW
    userId: number
};
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
};
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFollowing: boolean
    userId: number
};
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
};
type AddUsersType = {
    type: typeof ADD_USERS
    users: Array<UserType>
};
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
};
type UpCurrentPageType = {
    type: typeof UP_CURRENT_PAGE
    currentPage: number
};
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
};
export const
    toggleFollow = (userId: number): ToggleFollowType => ({type: TOGGLE_FOLLOW, userId: userId}),
    toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}),
    toggleFollowingProgress = (isFollowing: boolean, userId: number): ToggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing: isFollowing, userId: userId}),
    setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users: users}),
    addUsers = (users: Array<UserType>): AddUsersType => ({type: ADD_USERS, users: users}),
    setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount}),
    upCurrentPage = (currentPage: number): UpCurrentPageType => ({type: UP_CURRENT_PAGE, currentPage: currentPage}),
    setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const
    getUsersThunkCreator = (currentPage: number, pageSize: number, set_add: 'set' | 'add', isSetTotalUsersCount: boolean) => {
        return async (dispatch: any) => {
            dispatch(toggleIsFetching(true));
            const data = await usersAPI.getUsers(currentPage, pageSize);
            switch (set_add) {
                case 'set':
                    dispatch(setUsers(data.items));
                    break;
                case 'add':
                    dispatch(addUsers(data.items));
                    break;
                default:
                    console.log('Error set/add-user parameters in user-reducer!');
            }
            if (isSetTotalUsersCount) {
                dispatch(setTotalUsersCount(data.totalCount));
            }
            dispatch(toggleIsFetching(false));
        };
    },
    followThunkCreator = (followed: boolean, userId: number) => {
        return async (dispatch: any) => {
            if (!followed) {
                dispatch(toggleFollowingProgress(true, userId));
                const data = await usersAPI.postFollow(userId);
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            } else if (followed) {
                dispatch(toggleFollowingProgress(true, userId));
                const data = await usersAPI.deleteFollow(userId);
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            }
        };
    };


export default usersReducer;