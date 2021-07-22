import {stateAllType} from "./redux-store";

export const getUsers = (state: stateAllType) => {
    return state.usersPage.users
}
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