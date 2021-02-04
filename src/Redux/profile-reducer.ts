import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileStateType = {
    posts: Array<PostsPropsType>
    newPostText: string,
    profile: any
}
let initialState: ProfileStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: "",
    profile: null
}
export type ProfileActionsPropsType = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> | setUserProfile


const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsPropsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST } as const)

export const setUserProfile = (profile: ProfileStateType) => ({
    type: SET_USER_PROFILE,
    profile} as const)

export const getUserProfile = (userId: number) => (dispatch: any) => {
      usersAPI.getProfile(userId)
           .then(response => {
           dispatch(setUserProfile(response.data))
    })
}

 export const updateNewPostText = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text} as const)

 export type setUserProfile = {
    type: 'SET_USER_PROFILE',
    profile: any
}

export default profileReducer;