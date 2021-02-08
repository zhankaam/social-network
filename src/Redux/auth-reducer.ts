import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export type SetUserDataActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (usersId: number, email: string, login: string, isAuth: boolean) => ({type: SET_USER_DATA, data:{usersId, email,login, isAuth} } as const)

 export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export default authReducer;