import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '6659026b-0f7a-4f09-8bce-123e1102a2b6'}
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    },
};

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    postAuthLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    deleteAuthLogin() {
        return instance.delete(`auth/login`).then(response => response.data);
    },
};