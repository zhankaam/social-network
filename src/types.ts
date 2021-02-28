export type UserType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    UrlName: null
    photos: {
        small: string | null
        large: string | null
    },
    location: {
        country: string
        city: string
    }
}
export type ProfileType = {
    photos: {
        small: string | undefined
        large: string | undefined
    }
}