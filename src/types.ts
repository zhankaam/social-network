
export type UserType = {
    id: number
    fullName: string
    followed: boolean
    status: string
    photos: {
        small: string | null
        large: string | null
    },
    location: {
        country: string
        city: string
    }
}
export type PhotosType = {
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    aboutMe: string
}
export type ContactsType = {
     [key: string]: string | null
    // github: string
    // Linkedin: string
    // vk: string
    // instagram: string
    // facebook: string
    // twitter: string
    // website: string
    // youtube: string
    // mainLink: string
}
