import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e08e1901-cb67-4f8e-968d-12deec271219"
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
        return instance.get(`auth/me`)
    },
    login(email: string,password: string,rememberMe:boolean = false,captcha = null) {
        return instance.post(`auth/login`, {email,password,rememberMe,captcha})
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
