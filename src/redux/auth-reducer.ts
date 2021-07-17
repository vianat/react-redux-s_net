import {usersAPI} from "../api/usersAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

export type authStateType = {
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

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default : return state;
    }
}
// ACTION creators
export const setUserData = (
    userId: any, email: any, login: any, isAuth: boolean
) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


// THUNKS creators
export const authenticationMe = () => {
    return (dispatch: any) => {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }})
    }
}
export const login = (email: string, password: string, rememberMe = false, captcha: boolean) => {
    return (dispatch: any) => {

        usersAPI.login(email, password, rememberMe, captcha).then(data => {
            if (data.resultCode === 0){
                dispatch(authenticationMe())
            }else {
                let messege = data.messages.length > 0 ? data.messages[0] : "Some error";
                let action = stopSubmit('login', {_error: messege})
                dispatch(action)
            }
        })
    }
}
export const logout = () => {
    return (dispatch: any) => {
        usersAPI.logout().then(data => {
            if (data.resultCode === 0){
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;