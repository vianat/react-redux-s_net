import {usersAPI} from "../api/usersAPI";

const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      SET_USERS = "SET_USERS",
      SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
      SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
      TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
      FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

export type userType = {
    id: number,
    photos: string
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

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state:usersStateType = initialState, action: any) => {

    let stateCopy; // работаем с копией стейта обязательно

    switch (action.type) {

        case FOLLOW:
            stateCopy = {...state,
                                users:state.users.map(u => {
                                if(u.id ===  action.userID){
                                    return {...u, followed: true}
                                }
                                return u
                            })
            }
        return stateCopy;

        case UNFOLLOW:
            stateCopy = {...state,
                                users:state.users.map(u => {
                                    if(u.id ===  action.userID){
                                        return {...u, followed: false}
                                    }
                                    return u
                                })
            }
            return stateCopy;

        case SET_USERS: return {...state, users: action.users}

        case SET_CURRENT_PAGE: return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT: return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING: return {...state, isFetching: action.isFetching}

        case FOLLOWING_IN_PROGRESS: return {
            ...state,
            followingInProgress: action.isFetching
                ? state.followingInProgress.filter(id => id === action.userId)
                : state.followingInProgress.filter(id => id !== action.userId)
            }

        default : return state;
    }
}
// ACTION creators
export const followSuccess = (userID: number) => ({ type: FOLLOW, userID})
export const unfollowSuccess = (userID: number) => ({ type: UNFOLLOW, userID})
export const setUsers = (users: any) => ({ type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setToggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({ type: FOLLOWING_IN_PROGRESS, isFetching, userId})

// THUNKS creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setToggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export default usersReducer;