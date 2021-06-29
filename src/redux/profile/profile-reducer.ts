import {PhotosType, PostsPropsType, ProfileType} from "../../types";
import {InferActionsType} from "../redux-store";

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


export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

// TYPES
export type ActionsType = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState