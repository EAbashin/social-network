import {createSelector} from "reselect";
import {StateType} from "../redux-store";

export const
    getUsers = (state: StateType) => {
        return state.usersPage.users;
    },
    // Used reselect for example
    getUsersSuperSelector = createSelector(getUsers, (users) => {
        return users.filter(u => true);
    }),
    getPageSize = (state: StateType) => {
        return state.usersPage.pageSize;
    },
    getTotalUsersCount = (state: StateType) => {
        return state.usersPage.totalUsersCount;
    },
    getCurrentPage = (state: StateType) => {
        return state.usersPage.currentPage;
    },
    getIsFetching = (state: StateType) => {
        return state.usersPage.isFetching;
    },
    getPortionSize = (state: StateType) => {
        return state.usersPage.portionSize;
    },
    getFollowingInProgress = (state: StateType) => {
        return state.usersPage.followingInProgress;
    };