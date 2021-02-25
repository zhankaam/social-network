import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: SetUserDataActionType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (usersId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, payload:{usersId, email,login, isAuth} } as const)

 export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                debugger
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email:string, password:string,rememberMe:boolean) => (dispatch: any) => {

    authAPI.login(email,password,rememberMe)
        .then(response => {
         if(response.data.resultCode === 0){
             dispatch(getAuthUserData())
         } else {
            let message = response.data.messages.length > 0
                                    ? response.data.messages[0]
                                    : "some error"
             dispatch(stopSubmit("login", {_error: message}))
         }
    })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}

export default authReducer;