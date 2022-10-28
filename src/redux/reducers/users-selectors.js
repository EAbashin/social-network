import {createSelector} from "reselect";

export const
    getUsers = (state) => {
        return state.usersPage.users;
    },
    getUsersSuperSelector = createSelector(getUsers, (users) => {
        return users;
    }),
    getPageSize = (state) => {
        return state.usersPage.pageSize;
    },
    getTotalUsersCount = (state) => {
        return state.usersPage.totalUsersCount;
    },
    getCurrentPage = (state) => {
        return state.usersPage.currentPage;
    },
    getIsFetching = (state) => {
        return state.usersPage.isFetching;
    },
    getPortionSize = (state) => {
        return state.usersPage.portionSize;
    },
    getFollowingInProgress = (state) => {
        return state.usersPage.followingInProgress;
    };