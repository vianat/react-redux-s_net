import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "react";
import {updateObjectInArray} from "../utils/helpers/objects-helper";

let initialState = {
    users: [] as Array<userType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: usersStateType = initialState, action: any): usersStateType => {

    let stateCopy; // работаем с копией стейта обязательно

    switch (action.type) {

        case FOLLOW:
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
            return stateCopy;

        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
            return stateCopy;

        case SET_USERS: return {...state, users: action.users}

        case SET_CURRENT_PAGE: return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT: return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING: return {...state, isFetching: action.isFetching}

        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? state.followingInProgress.filter(id => id === action.userId)
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default: return state;
    }
}
// ACTION creators
export const followSuccess = (userID: number) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<userType>) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

// THUNKS creators
export const getUsersTC = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(setToggleIsFetching(true));
        debugger
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleIsFetching(false));
        debugger
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
export const followTC = (userId: number) => {
    return async (dispatch: DispatchType) => {
        // refactor version
        // let apiMethod = usersAPI.postFollow.bind(usersAPI)
        // let actionCreator = followSuccess
        // followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)

        dispatch(toggleFollowingProgress(true, userId))
        const result = await usersAPI.follow(userId);
        if (result.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}
export const unfollowTC = (userId: number) => {
    return async (dispatch: DispatchType) => {
        // refactor version
        // followUnfollowFlow(dispatch, userId, usersAPI.deleteUnfollow.bind(usersAPI),unfollowSuccess)

        dispatch(toggleFollowingProgress(true, userId))
        const res = await usersAPI.unfollow(userId);
        if(res.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}
// const followUnfollowFlow = (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: any) => {
//     return async (dispatch: DispatchType) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         //хотим подписаться/отписаться и делаем post-запрос на сервер
//         let data = await apiMethod(userId)
//         if (data.resultCode === 0) {
//             dispatch(actionCreator(userId))
//         }
//         dispatch(toggleFollowingProgress(false, userId))
//     }
// }

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
export type userType = {
    id: number,
    photos: { small: string | null, large: string | null }
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}
type usersStateType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type actionsTypes =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
type DispatchType = Dispatch<actionsTypes>

export default usersReducer;