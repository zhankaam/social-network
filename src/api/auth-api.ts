import {instance, APIResponseType, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginResponseDataType,ResultCodeEnum |ResultCodeForCaptcha>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}


type MeResponseDataType = {
        id: number
        email: string
        login: string
}
type LoginResponseDataType = {
        userId: number
}