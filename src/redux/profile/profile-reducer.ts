import {PhotosType, PostsPropsType, ProfileType} from "../../types";
import {stopSubmit} from "redux-form";
import {profileAPI} from "../../api/profile-api";
import {BaseThunkType, InferActionsType} from "../redux-store";

let initialState = {
    posts: [
        {id: 1, message: "5 Secret features of JSON.stringify()", likesCount: 1273893},
        {id: 2, message: "Use Chrome DevTools Like a Senior Frontend Developer", likesCount: 258743},
        {id: 3, message: " 7 really good reasons not to use TypeScript", likesCount: 67844},
        {id: 4, message: "19 things I stole from great developers", likesCount: 2682167}
    ] as Array<PostsPropsType>,
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
}


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newPost = {id: 5, message: action.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        }
        case 'SN/PROFILE/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SN/PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case 'SN/PROFILE/SET_STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}

// ACTION CREATORS
export const actions = {
    addPost: (newPostText: string) => ({type: 'SN/PROFILE/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}


// THUNK CREATORS
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

// TYPES
export type ActionsType = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState
export type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default profileReducer;