import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bcdf24e0-2cad-40e4-be67-f9d4eea9b547"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
      return instance.post(`follow/${userId}`)
  },
    unfollow(userId: number) {
      return instance.delete(`follow/${userId}`)
  },
    getProfile(userId: number) {
        console.warn('Obsolete method.Please profileAPI object.')
       return  profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId: number){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return  instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        let formData = new FormData()
        formData.append("image",photoFile)

        return  instance.put(`profile/photo`, formData,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: any){
        return  instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get<meResponseType>(`auth/me`)
    },
    login(email: string,password: string,rememberMe:boolean = false,captcha: string | null = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email,password,rememberMe,captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}

type meResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: string[]
}
type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: string[]
}

export enum ResultCodeEnum {
    Success= 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}