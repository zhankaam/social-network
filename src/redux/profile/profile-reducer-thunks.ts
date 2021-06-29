// import {BaseThunkType} from "../redux-store";
// import {stopSubmit} from "redux-form";
// import {ActionsType} from "./profile-reducer";


// THUNK CREATORS
// export const getUserProfile_ = (userId: number): ThunkType => async (dispatch) => {
//     let data = await profileAPI.getProfile(userId);
//     dispatch(actions.setUserProfile(data))
// }

// export const getStatus_ = (userId: number): ThunkType => async (dispatch) => {
//     let data = await profileAPI.getStatus(userId);
//     dispatch(actions.setStatus(data))
// }

// export const updateStatus_ = (status: string): ThunkType => async (dispatch) => {
//     let data = await profileAPI.updateStatus(status);
//     if (data.resultCode === 0) {
//         dispatch(actions.setStatus(status))
//     }
// }

// export const savePhoto_ = (file: File): ThunkType => async (dispatch) => {
//     let data = await profileAPI.savePhoto(file);
//     if (data.resultCode === 0) {
//         dispatch(actions.savePhotoSuccess(data.data.photos))
//     }
// }

// export const saveProfile_ = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
//     const userId = getState().auth.userId
//     const data = await profileAPI.saveProfile(profile);
//
//     if (data.resultCode === 0) {
//         if (userId != null) {
//             dispatch(getUserProfile(userId))
//         } else {
//             throw new Error("userId can't be null")
//         }
//     } else {
//         dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
//         return Promise.reject(data.messages[0])
//     }
// }


//export type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export const a = 0;
