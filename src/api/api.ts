import axios from "axios";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "c062bc67-53d6-4d4c-a2dc-1d65e21a089d"}
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

    delete(userID = 55) {
        return instanse.delete(`follow/${userID}`).then(response => response.data);
    },

    post(userID: any) {
        return instanse.post(`follow/${userID}`).then(response => response.data);
    },

}

