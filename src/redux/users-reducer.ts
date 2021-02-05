const FOLLOW = "FOLLOW", UNFOLLOW = "UNFOLLOW", SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
            followed: false, name: "Masha", status: "the boss",  location:{city: "Sacramento", country: "USA"}},
        {id: 2, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
            followed: true,  name: "Dasha", status: "the fufel", location:{city: "Boston", country: "USA"}},
        {id: 3, photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LOaJsHOpxe04L9zVAU3oRGrhKtcn-hirSQ&usqp=CAU",
            followed: false, name: "Pasha", status: "the mufel", location:{city: "Denwer", country: "USA"}}
    ]
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

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default :
            return state;
    }
}

export const followAC = (userID: number) => ({ type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({ type: UNFOLLOW, userID})
export const setUsersAC = (users: any) => ({ type: SET_USERS, users})

export default usersReducer;

