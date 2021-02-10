import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type setUserProfile = {
    type: 'SET_USER_PROFILE',
    profile: any
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileStateType = {
    posts: Array<PostsPropsType>
    newPostText: string,
    profile: null,
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
    profile: null,
    status: ""
}
export type ProfileActionsPropsType = ReturnType<typeof addPost> |
   /* ReturnType<typeof updateNewPostText> |*/ ReturnType<typeof setStatus> | setUserProfile


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

export const getUserProfile = (userId: number) => (dispatch: any) => {
      usersAPI.getProfile(userId)
           .then(response => {
           dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: any) => {
      profileAPI.getStatus(userId)
           .then(response => {
           dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status:string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

 /*export const updateNewPostText = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text} as const)*/



export default profileReducer;