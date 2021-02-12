const FOLLOW = "FOLLOW",
      UNFOLLOW = "UNFOLLOW",
      SET_USERS = "SET_USERS",
      SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
      SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
      TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}
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
type usersStateType = {users: Array<userType>}

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

        default : return state;
    }
}
// ACTION creaters
export const follow = (userID: number) => ({ type: FOLLOW, userID})
export const unfollow = (userID: number) => ({ type: UNFOLLOW, userID})
export const setUsers = (users: any) => ({ type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setToggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;