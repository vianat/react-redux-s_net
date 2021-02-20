const SET_USER_DATA = "SET_USER_DATA"

type authStateType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

let initialState = {
    userId: 0,
    email: "null",
    login: "null",
    isAuth: false
}

const authReducer = (state: authStateType = initialState, action: any) => {

    switch (action.type) {

        case SET_USER_DATA: return {...state, ...action.data}

        default : return state;
    }
}
// ACTION creaters
export const setUserData = (userId: number, email: string, login: string) => ({ type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer;