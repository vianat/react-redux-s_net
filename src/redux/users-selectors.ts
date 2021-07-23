import {stateAllType} from "./redux-store";
import {createSelector} from "reselect";
import {userType} from "./users-reducer";

export const getPageSize = (state: stateAllType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: stateAllType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: stateAllType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: stateAllType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: stateAllType) => {
    return state.usersPage.followingInProgress
}
export const getIsAuth = (state: stateAllType) => {
    return state.auth.isAuth
}
export const getUsers = (state: stateAllType) => {
    return state.usersPage.users
}

// принимает в зависимости селектор(ы) и работает с результатами
export const getUsersRESelector = createSelector(getUsers, getIsFetching,
    (users: Array<userType>, isFetching: boolean) => {
        return users.filter((u) => true)
})