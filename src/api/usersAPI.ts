import {instanse} from "./instanse";
import {profileAPI} from "./profileAPI";

export const usersAPI = {
    getUsers (currentPage=1, pageSize = 100) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    authMe () {
        return instanse.get(`auth/me`)
            .then(response => response.data);
    },

    getProfile () {
        return profileAPI.getProfile();
    },

    unfollow(userID = 55) {
        return instanse.delete(`follow/${userID}`).then(response => response.data);
    },

    follow(userID: any) {
        return instanse.post(`follow/${userID}`).then(response => response.data);
    },

}