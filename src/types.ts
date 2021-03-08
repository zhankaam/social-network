export type UserType = {
    id: number
   name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
        small: string | null
        large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    // photos: {
    //     small: string | null
    //     large: string | null
    // }
    photos: PhotosType
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
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
