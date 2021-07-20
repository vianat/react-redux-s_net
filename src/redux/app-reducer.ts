import {authenticationMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default :
            return state;
    }
}
// ACTION creators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// THUNKS creators
export const initializeAppTC = () => {
    return (dispatch: any) => {
        let promise = dispatch(authenticationMe());
        debugger
        Promise.all ([promise])  // собираем промисы в массив и если все зарезолвились диспатчим
            .then(() => {
                dispatch(initializedSuccess());
        })
    }
}

export default appReducer;