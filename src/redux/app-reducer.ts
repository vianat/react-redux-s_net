import {usersAPI} from "../api/usersAPI";
import {stopSubmit} from "redux-form";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState , action: any) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default : return state;
    }
}
// ACTION creators
export const setUserData = (
    userId: any, email: any, login: any, isAuth: boolean
) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


// THUNKS creators
export const initializedAppTC = () => {
    return (dispatch: any) => {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0){
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }})
    }
}


export default appReducer;