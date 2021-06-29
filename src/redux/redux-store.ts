import {Action, applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile/profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer} from "./auth-reducer/auth-reducer";
import {chatReducer} from "./chat-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";
import {usersReducer} from "./users/users-reducer";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import {authWatcherSaga} from "./auth-reducer/auth-reducer-sagas";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
});

// создаем промежуточный слой сага мидлвэйр
const sagaMiddleware = createSagaMiddleware()

export type RootStateRedux = ReturnType<typeof rootReducer>
let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware));

// type PropertiesTypes<T> = T extends { [key: string] : infer U } ? U : never
// export type InferActionsType<T extends { [key: string] : (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateRedux, unknown, A>

// затем запускаем сагу
sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield all([authWatcherSaga(),])
}


// @ts-ignore
window.store = store;

export default store;