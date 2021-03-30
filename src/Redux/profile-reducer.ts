import {PhotosType, PostsPropsType, ProfileType} from "../types";
import {stopSubmit} from "redux-form";
import {profileAPI} from "../api/profile-api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


// export type InitialStateType = {
//     posts: Array<PostsPropsType>
//     newPostText: string,
//     profile: ProfileType,
//     status: string | null
// }
export type InitialStateType = typeof initialState
let initialState = {
     posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ] as Array<PostsPropsType>,
     newPostText: "",
     profile: null as ProfileType | null,
     status: ""
}
export type setUserProfile = {
    type: 'SET_USER_PROFILE',
    profile: ProfileType
}
export type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof setStatus>
    | setUserProfile | ReturnType<typeof deletePost> |  ReturnType<typeof savePhotoSuccess>


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: action.newPostText, likesCount: 0 };
            return {...state, posts: [...state.posts, newPost],newPostText: ''}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({ type: ADD_POST, newPostText } as const)

export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile} as const)

export const setStatus = (status: string ) => ({
    type: SET_STATUS,
    status} as const)

export const deletePost = (postId: number) => ({
    type: DELETE_POST,
    postId} as const)

export const savePhotoSuccess = (photos:PhotosType) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos} as const)

export const getUserProfile = (userId: number) =>  async (dispatch: any) => {
           let data = await profileAPI.getProfile(userId);
           dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
           let data = await profileAPI.getStatus(userId);
           dispatch(setStatus(data))
}

export const updateStatus = (status:string) => async (dispatch: any) => {
            let data = await profileAPI.updateStatus(status);
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file: File) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file);
    if(data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (dispatch: any,getState:any) => {
     const userId = getState().auth.userId
     const data = await profileAPI.savePhoto(profile);
     if(data.resultCode === 0) {
        dispatch(getUserProfile(userId))
     } else {
         dispatch(stopSubmit("edit-profile",{error: data.messages[0]}))
               return Promise.reject(data.messages[0])
     }
}


export default profileReducer;