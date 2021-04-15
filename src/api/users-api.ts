import {GetItemsType, instance, APIResponseType} from "./api";

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10,term: string = "",friend: null | boolean = null) => {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
    // getProfile(userId: number) {
    //     console.warn('Obsolete method.Please profileAPI object.')
    //     return profileAPI.getProfile(userId)
    // }
}
