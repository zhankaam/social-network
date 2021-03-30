import {ResultCodeEnum, ResultCodeForCaptcha} from "../api/api";
import {stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const actions = {
    setAuthUserData: (userId: number | null,
                      email: string | null,
                      login: string | null,
                      isAuth: boolean) => ({type: SET_USER_DATA, payload:{userId, email,login, isAuth} } as const),
    getCaptchaUrlSuccess: (captchaUrl: string ) => ({type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl} } as const),

}


    export const getAuthUserData = ():ThunkType => async (dispatch) => {
            let response = await authAPI.me();

            if (response.data.resultCode === ResultCodeEnum.Success) {
                let {id, email, login} = response.data.data
                dispatch(actions.setAuthUserData(id, email, login, true))
            }
    }

    export const login = (email:string, password:string,rememberMe:boolean,captcha: string) => async (dispatch: any) => {
         let data = await authAPI.login(email,password,rememberMe,captcha);
         if(data.resultCode === ResultCodeEnum.Success){
             dispatch(getAuthUserData())
         } else {
             if(data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
             dispatch(getCaptchaUrl())
             }
             let message = data.messages.length > 0
                                    ? data.messages[0]
                                    : "some error"
             dispatch(stopSubmit("login", {_error: message}))
         }
}

    export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
         const response = await securityAPI.getCaptchaUrl();
         const captchaUrl = response.data.url
         dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

    export const logout = (): ThunkType => async (dispatch) => {
            let response = await authAPI.logout();
            if(response.data.resultCode === ResultCodeEnum.Success){
                dispatch(actions.setAuthUserData(null,null,null,false))
            }
}


export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
export default authReducer;