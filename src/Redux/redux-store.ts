import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
// export type DispatchPropsType1 = typeof store.dispatch
export type RootStateRedux = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;