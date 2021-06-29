import {InferActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer/auth-reducer-sagas";

let initialState = {
    initialized: false,
    globalError: null
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// THUNK CREATOR
export const initializeApp = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

// ACTION CREATORS
export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

// TYPES
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
// type ThunkType = BaseThunkType<ActionsType>
