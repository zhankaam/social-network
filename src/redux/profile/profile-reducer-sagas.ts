import {call, put, select, takeEvery} from "redux-saga/effects";
import {profileAPI} from "../../api/profile-api";
import {RootStateRedux} from "../redux-store";
import {stopSubmit} from "redux-form";
import {ProfileType} from "../../types";
import {actions} from "./profile-reducer";

// SAGAS
export function* getUserProfileWorkerSaga(action: ReturnType<typeof getUserProfile>) {
    let data = yield call(profileAPI.getProfile, action.userId)
    yield put(actions.setUserProfile(data))
}

export const getUserProfile = (userId: number) => ({type: 'PROFILE/GET-USER-PROFILE', userId})

export function* getStatusWorkerSaga(action: ReturnType<typeof getStatus>) {
    let data = yield call(profileAPI.getStatus, action.userId)
    yield put(actions.setStatus(data))
}

export const getStatus = (userId: number) => ({type: 'PROFILE/GET-STATUS', userId})

export function* updateStatusWorkerSaga(action: ReturnType<typeof updateStatus>) {
    let data = yield call(profileAPI.updateStatus, action.status);
    if (data.resultCode === 0) {
        yield put(actions.setStatus(action.status))
    }
}

export const updateStatus = (status: string) => ({type: 'PROFILE/UPDATE-STATUS', status})

export function* savePhotoWorkerSaga(action: ReturnType<typeof savePhoto>) {
    let data = yield call(profileAPI.savePhoto, action.file);
    if (data.resultCode === 0) {
        yield put(actions.savePhotoSuccess(data.data.photos))
    }
}

export const savePhoto = (file: File) => ({type: 'PROFILE/SAVE-PHOTO', file})

export function* saveProfileWorkerSaga(action: ReturnType<typeof saveProfile>) {

    const state: RootStateRedux = yield select()
    const userId = state.auth.userId
    const data = yield call(profileAPI.saveProfile, action.profile);

    if (data.resultCode === 0) {
        if (userId != null) {
            yield put(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        yield put(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export const saveProfile = (profile: ProfileType) => ({type: 'PROFILE/SAVE-PROFILE', profile})


export function* profileWatcherSaga() {
    yield takeEvery('PROFILE/GET-USER-PROFILE', getUserProfileWorkerSaga)
    yield takeEvery('PROFILE/GET-STATUS', getStatusWorkerSaga)
    yield takeEvery('PROFILE/UPDATE-STATUS', updateStatusWorkerSaga)
    yield takeEvery('PROFILE/SAVE-PHOTO', savePhotoWorkerSaga)
    yield takeEvery('PROFILE/SAVE-PROFILE', saveProfileWorkerSaga)
}
