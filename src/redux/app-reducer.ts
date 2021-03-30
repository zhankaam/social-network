import {getAuthUserData} from "./auth-reducer";
import {InferActionsType} from "./redux-store";
// import {Dispatch} from "redux";


let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action: ActionsType ): InitialStateType => {

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

export const initializeApp = () => (dispatch: any ) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(actions.initializedSuccess())
    })

}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS' } as const)
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
export default appReducer;