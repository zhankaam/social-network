import {RootStateRedux} from "./redux-store";

export const getUsersState = (state: RootStateRedux) => {
    return state.usersPage.users
}

export const getPageSize = (state: RootStateRedux) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateRedux) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateRedux) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateRedux) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootStateRedux) => {
    return state.usersPage.followingInProgress
}
/*
export const getIsAuth = (state: RootStateRedux) => {
    return state.usersPage.isAuth
}*/
