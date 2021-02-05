export type UserType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    UrlName: null
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
export type ProfileType = {
    userId: string
}