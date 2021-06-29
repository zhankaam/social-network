export const a = 0;
// THUNK CREATORS
// export const getAuthUserData_ = (): ThunkType => async (dispatch) => {
//     let response = await authAPI.me();
//
//     if (response.data.resultCode === ResultCodeEnum.Success) {
//         let {id, email, login} = response.data.data
//         dispatch(actions.setAuthUserData(id, email, login, true))
//     }
// }

// export const login_ = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
//     let data = await authAPI.login(email, password, rememberMe, captcha);
//     if (data.resultCode === ResultCodeEnum.Success) {
//         dispatch(getAuthUserData())
//     } else {
//         if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
//             dispatch(getCaptchaUrl())
//         }
//         let message = data.messages.length > 0
//             ? data.messages[0]
//             : "some error"
//         dispatch(stopSubmit("login", {_error: message}))
//     }
// }

// export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
//     const response = await securityAPI.getCaptchaUrl();
//     const captchaUrl = response.data.url
//     dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
// }

// export const logout_ = (): ThunkType => async (dispatch) => {
//     let response = await authAPI.logout();
//     if (response.data.resultCode === ResultCodeEnum.Success) {
//         dispatch(actions.setAuthUserData(null, null, null, false))
//     }
// }

//type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

