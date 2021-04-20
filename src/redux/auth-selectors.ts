import {RootStateRedux} from "./redux-store";

export const selectIsAuth = (state: RootStateRedux) => {
    return state.auth.isAuth
}
export const selectCurrentUserLogin = (state: RootStateRedux) => {
    return state.auth.login
}