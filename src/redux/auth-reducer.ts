import {usersAPI} from "../api/usersAPI";
import {stopSubmit} from "redux-form";
import {Dispatch} from "react";

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
        default :
            return state;
    }
}
// ACTION creators
export const setUserData = (
    userId: any, email: any, login: any, isAuth: boolean) => {

    return {
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
    }
}


// THUNKS creators
export const authenticationMe = () => {
    return async (dispatch: Dispatch<any>) => {
        let response = await usersAPI.authMe()

        if (response.resultCode === 0) {
            let {id, login, email} = response.data
            dispatch(setUserData(id, login, email, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe = false, captcha: boolean) => {
    return async (dispatch: Dispatch<any>) => {
        let response = await usersAPI.login(email, password, rememberMe, captcha)

        if (response.resultCode === 0) {
            dispatch(authenticationMe())
        } else {
            let messege = response.messages.length > 0 ? response.messages[0] : "Some error";
            let action = stopSubmit('login', {_error: messege})
            dispatch(action)
        }
    }
}
export const logout = () => {
    return async (dispatch: Dispatch<any>) => {
        let response = await usersAPI.logout()

        if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer;