import {GetItemsType, instance} from "./api";

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
    // getProfile(userId: number) {
    //     console.warn('Obsolete method.Please profileAPI object.')
    //     return profileAPI.getProfile(userId)
    // }
}
