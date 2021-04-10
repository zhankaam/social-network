import {Action, applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile/profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import {usersReducer} from "./users/users-reducer";

let rootReducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type RootStateRedux = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// type PropertiesTypes<T> = T extends { [key: string] : infer U } ? U : never
// export type InferActionsType<T extends { [key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type InferActionsType<T> = T extends { [key: string] : (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action,R = Promise<void>> = ThunkAction<R, RootStateRedux, unknown, A>

// @ts-ignore
window.store = store;

export default store;