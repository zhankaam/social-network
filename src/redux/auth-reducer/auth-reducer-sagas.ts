import {call, put, takeEvery} from "redux-saga/effects";
import {authAPI} from "../../api/auth-api";
import {ResultCodeEnum, ResultCodeForCaptcha} from "../../api/api";
import {stopSubmit} from "redux-form";
import {securityAPI} from "../../api/security-api";
import {actions} from "./auth-reducer";

// SAGAS
export function* getAuthUserDataWorkerSaga(action: ReturnType<typeof getAuthUserData>) {
    let res = yield call(authAPI.me)

    if (res.data.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = res.data.data
        yield put(actions.setAuthUserData(id, email, login, true))
    }
}

export const getAuthUserData = () => ({type: 'AUTH/GET-AUTH-USER-DATA'})

export function* loginWorkerSaga(action: ReturnType<typeof login>) {
    let data = yield call(authAPI.login, action.email, action.password, action.rememberMe, action.captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        yield put(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            yield put(getCaptchaUrl())
        }
        let message = data.messages.length > 0
            ? data.messages[0]
            : "some error"
        yield put(stopSubmit("login", {_error: message}))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => ({
    type: 'AUTH/LOGIN',
    email,
    password,
    rememberMe,
    captcha
})

export function* getCaptchaUrlWorkerSaga(action: ReturnType<typeof getCaptchaUrl>) {
    const response = yield call(securityAPI.getCaptchaUrl)
    const captchaUrl = response.data.url
    yield put(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const getCaptchaUrl = () => ({type: 'AUTH/GET-CAPTCHA-URL'})

export function* logoutWorkerSaga(action: ReturnType<typeof logout>) {
    let response = yield call(authAPI.logout)
    if (response.data.resultCode === ResultCodeEnum.Success) {
        yield put(actions.setAuthUserData(null, null, null, false))
    }
}

export const logout = () => ({type: 'AUTH/LOGOUT'})

export function* authWatcherSaga() {
    yield takeEvery('AUTH/GET-AUTH-USER-DATA', getAuthUserDataWorkerSaga)
    yield takeEvery('AUTH/LOGIN', loginWorkerSaga)
    yield takeEvery('AUTH/GET-CAPTCHA-URL', getCaptchaUrlWorkerSaga)
    yield takeEvery('AUTH/LOGOUT', logoutWorkerSaga)
}
