import {profileAPI} from "../api/api";
import {PhotosType, ProfileType} from "../types";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type setUserProfile = {
    type: 'SET_USER_PROFILE',
    profile: ProfileType
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileStateType = {
    posts: Array<PostsPropsType>
    newPostText: string,
    profile: ProfileType,
    status: string | null
}
let initialState: ProfileStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: "",
    profile: {
        userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
             github: "",
             Linkedin: "",
             vk: "",
             instagram: "",
             facebook: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: ""
        },
        photos: {
            small: '',
            large:''
        },
        aboutMe: '',
    },
    status: ""
}
export type ProfileActionsPropsType = ReturnType<typeof addPost> |
   /* ReturnType<typeof updateNewPostText> |*/ ReturnType<typeof setStatus> | setUserProfile |
    ReturnType<typeof deletePost> |  ReturnType<typeof savePhotoSuccess>


const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsPropsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: action.newPostText, likesCount: 0 };
            return {...state, posts: [...state.posts, newPost]}
        }
       /* case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }*/
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: {small:action.photos.photos.small, large: action.photos.photos.large}}
            }
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({
    type: ADD_POST, newPostText } as const)

export const setUserProfile = (profile: ProfileStateType) => ({
    type: SET_USER_PROFILE,
    profile} as const)

export const setStatus = (status: string | null) => ({
    type: SET_STATUS,
    status} as const)

export const deletePost = (postId: number) => ({
    type: DELETE_POST,
    postId} as const)

export const savePhotoSuccess = (photos:PhotosType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos} as const)

export const getUserProfile = (userId: number) =>  async (dispatch: any) => {
           let response = await profileAPI.getProfile(userId);
           dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
           let response = await profileAPI.getStatus(userId);
           dispatch(setStatus(response.data))
}

export const updateStatus = (status:string) => async (dispatch: any) => {
            let response = await profileAPI.updateStatus(status);
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file: File) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

 /*export const updateNewPostText = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text} as const)*/



export default profileReducer;