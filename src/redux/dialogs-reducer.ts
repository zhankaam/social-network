import {InferActionsType} from "./redux-store";


let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Andrew"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your It-kamasutra? "},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND_MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

// ACTION CREATORS
export const actions = {
    sendMessageCreator: (newMessageBody:string) => ({type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody} as const)
}

// TYPES
export type ActionsType = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState
export default dialogsReducer;