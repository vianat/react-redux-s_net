import {instanse} from "./instanse";

export const profileAPI = {
    getProfile() {                                  //userId: number id захардкожен =(
        return instanse.get(`profile/status/15083`)
            .then(response => response.data);
    },

    getUserStatus() {                               //userId: number id захардкожен =(
        return instanse.get(`profile/status/15083`)
            .then(response => response.data);
    },

    updateStatus(status: string) {
        return instanse.put(`profile/status/`, {status: status})
            .then(response => response.data);
    },
}