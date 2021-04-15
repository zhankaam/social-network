import {RootStateRedux} from "../redux-store";

export const getUsersState = (state: RootStateRedux) => {
    return state.usersPage.users
}
/*export const getUsersSelector = (state: RootStateRedux) => {
    return getUsersState(state).filter(u => true)
}
export const getUsersSuperSelector = createSelector(getUsersState,getIsFetching,(users,isFetching) => {
    return users.filter(u => true)
})*/
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
export const getUsersFilter = (state: RootStateRedux) => {
    return state.usersPage.filter
}
/*
export const getIsAuth = (state: RootStateRedux) => {
    return state.usersPage.isAuth
}*/
