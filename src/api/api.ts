import axios from "axios";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "9023ef56-e618-4743-b1d7-425c6976d211"}
})

export const usersAPI = {
    getUsers (currentPage=1, pageSize = 100) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    authMe () {
        return instanse.get(`auth/me`)
            .then(response => response.data);
    },

    getProfile () {                         // id хард, нужно будет получать
        return instanse.get(`profile/2`)
            .then(response => response.data);
    },

    unfollow(userID = 55) {
        return instanse.delete(`follow/${userID}`).then(response => response.data);
    },

    follow(userID: any) {
        return instanse.post(`follow/${userID}`).then(response => response.data);
    },

}

